const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "root", //mysql의 password
    database : "mjclass", //사용할 데이터베이스
});

connection.connect();

app.get('/', (req, res) =>{
    res.send('서버 온!')
})

app.post("/idplz", (req,res)=>{
    const id = req.body.id;
    // console.log(req.body);
    connection.query("INSERT INTO users (user_id) values (?)",[id],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });

    
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})