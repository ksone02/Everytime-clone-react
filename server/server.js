const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const mysql = require("mysql"); // mysql 모듈 사용
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "root", //mysql의 password
    database : "mjclass", //사용할 데이터베이스
});

connection.connect();

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

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
});