const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const mysql = require("mysql"); // mysql 모듈 사용
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

axios.defaults.withCredentials = true;

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "kimdongho99", //mysql의 password
    database : "mjclass", //사용할 데이터베이스
});

connection.connect();

app.use(cors({
    origin: true,
    credentials: true,
}))

app.use(cookieParser());

app.get('/', (req, res) =>{
    res.send('서버 온!');
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
app.post('/checkemail', (req, res) => {
    connection.query('SELECT user_email FROM users WHERE user_email = ?', [req.body.email], function(err, row) {
        let checkEmail = new Object();
        checkEmail.tf = false;

        if(row[0] === undefined) {
            checkEmail.tf = true;
        } else {
            checkEmail.tf = false;
        }
        res.send(checkEmail);
    });
});
app.post('/checknickname', (req, res) => {
    connection.query('SELECT user_nickname FROM users WHERE user_nickname = ?', [req.body.nickname], function(err, row) {
        let checkNickname = new Object();
        checkNickname.tf = false;

        if(row[0] === undefined) {
            checkNickname.tf = true;
        } else {
            checkNickname.tf = false;
        }
        res.send(checkNickname);
    });
});

app.post('/login', cors(), (req, res) => {
    var users_login = [req.body.id, req.body.pw];
    connection.query('SELECT * FROM users WHERE user_id = ?', users_login[0], (err, row) => {
        let checkLogin = new Object();
        checkLogin.tf = false;
        if(err) console.log(err);
        if(row.length > 0) {
            console.log(users_login[0]);
            console.log(users_login[1]);
            if(users_login[1] == row[0].user_password) {
                console.log("로그인 성공");
                checkLogin.tf = true;
                session.id = row[0].user_id;
                session.nickname = row[0].user_nickname;
                session.user_name = row[0].user_name;
                session.logined = true;
                console.log(session);
                res.send(checkLogin);
            } else {
                console.log("비밀번호가 틀립니다.");
                checkLogin.tf = false;
                res.send(checkLogin);
            }
        } else {
            console.log('ID가 존재하지 않습니다.');
            checkLogin.tf = false;
            res.send(checkLogin);
        }
        
    });
});

app.post('/loginchecked', (req, res) => {
    if(session.logined == undefined) {
        res.send({logined: false});
    }else {
        res.send({
            logined: session.logined,
            user_id: session.id,
            user_nickname: session.nickname,
            user_name: session.user_name
        });
    }
});


app.post('/logout', (req, res) => {
    session.logined = false;
    if(session.logined == true) {
        console.log("삭제실패");
    } else {
        console.log("삭제성공");
    }
})

app.post('/writeFreeIn', (req, res) => {
    var today = new Date();
    var boardInfo = {
        "title": req.body.title,
        "content": req.body.content,
        "userNickname": req.body.userNickname,
        "isAnony": req.body.isAnony,
        "date": today,
        "board": "freeboardIn"
    }

    connection.query('INSERT INTO board_free_in SET ?' , boardInfo, function (error, results, fields) {
        if (error) {
            console.log("에러발생");
        } else {
            console.log(boardInfo);
        }
    });    
});

app.post('/writeCheck', (req, res) => {
    connection.query('SELECT * FROM board_free_in order by number desc', function(error, results) {
        if(error) console.log("오류발생");
        if(results) {
            res.send(results);
        }
    });
})

app.post('/postDetail', (req, res) => {
    connection.query('SELECT * FROM board_free_in WHERE number = ?', [req.body.number], function(err, result) {
        if(err) console.log("오류");
        if(result) {
            res.send(result);
        }
    });
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
});