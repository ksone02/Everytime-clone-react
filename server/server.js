const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const mysql = require("mysql"); // mysql 모듈 사용
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

let isLogin = false;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "kimdongho99", //mysql의 password
    database : "mjclass", //사용할 데이터베이스
});

connection.connect();

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(cookieParser());
app.use(
    session({
        key: "loginData",
        secret: "testSecret",
        resave: false,
        saveUninitialized: false,
        cooke: {
            expires: 60 * 60 * 24,
        },
    })
);

app.get('/', (req, res) =>{
    res.send('서버 온!')
});

app.post("/register", (req,res)=>{
    var today = new Date();
    var users = {
        "user_id": req.body.id,
        "user_password": req.body.pw,
        "user_email": req.body.email,
        "user_name": req.body.user_name,
        "user_nickname": req.body.nickname,
        "created_time": today,
    }

    connection.query('INSERT INTO users SET ?' , users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code" : 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });    
});

app.post('/checkid', (req, res) => {
    connection.query('SELECT user_id FROM users WHERE user_id = ?', [req.body.id], function(err, row) {
        let checkId = new Object();
        checkId.tf = false;

        if(row[0] === undefined) {
            checkId.tf = true;
        } else {
            checkId.tf = false;
        }
        res.send(checkId);
    });
});

app.post('/login', (req, res) => {
    var users_login = [req.body.id, req.body.pw]
    connection.query('SELECT * FROM users WHERE user_id = ?', users_login[0], (err, row) => {
        if(err) console.log(err);

        if(row.length > 0) {
            console.log(users_login[0]);
            console.log(users_login[1]);
            if(users_login[1] == row[0].user_password) {
                console.log("로그인 성공");
                req.session.loginData = users_login[0];
                req.session.save();
                isLogin = true;
            } else {
                console.log("비밀번호가 틀립니다.");
            }
        } else {
            console.log('ID가 존재하지 않습니다.');
        }
    });
    res.end();
});

app.get('/loginCheck', (req, res) => {
    if(isLogin == true) {
        res.send({loggedIn: true, loginData: req.session.loginData});
        res.send(req.session.loginData);
    } else {
        res.send({loggedIn: false});
    }
});

app.get('/logout', (req, res) => {
    if(req.session.loginData) {
        req.session.destroy(error => {if(error) console.log(error)});
        console.log("세션정보 삭제")
    } else {
        console.log("세션정보 삭제 실패")
    }
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
});