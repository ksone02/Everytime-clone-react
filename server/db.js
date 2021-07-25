const mysql = require("mysql"); // mysql 모듈 사용

exports.connection = mysql.createConnection({
    host : "localhost",
    port: 3306,
    user : "root", //mysql의 id
    password : "kimdongho99", //mysql의 password
    database : "mjclass", //사용할 데이터베이스
});