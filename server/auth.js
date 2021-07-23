const session = require('express-session');
const db = require('./db');

exports.register = (req,res) => {
    var today = new Date();
    var users = {
        "user_id": req.body.id,
        "user_password": req.body.pw,
        "user_email": req.body.email,
        "user_name": req.body.user_name,
        "user_nickname": req.body.nickname,
        "created_time": today,
    }

    db.connection.query('INSERT INTO users SET ?' , users, function (error, results, fields) {
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
}

exports.checkid = (req,res) => {
    db.connection.query('SELECT user_id FROM users WHERE user_id = ?', [req.body.id], function(err, row) {
        let checkId = new Object();
        checkId.tf = false;

        if(row[0] === undefined) {
            checkId.tf = true;
        } else {
            checkId.tf = false;
        }
        res.send(checkId);
    });
}
exports.checkemail = (req,res) => {
    db.connection.query('SELECT user_email FROM users WHERE user_email = ?', [req.body.email], function(err, row) {
        let checkEmail = new Object();
        checkEmail.tf = false;

        if(row[0] === undefined) {
            checkEmail.tf = true;
        } else {
            checkEmail.tf = false;
        }
        res.send(checkEmail);
    });
}
exports.checknickname = (req,res) => {
    db.connection.query('SELECT user_nickname FROM users WHERE user_nickname = ?', [req.body.nickname], function(err, row) {
        let checkNickname = new Object();
        checkNickname.tf = false;

        if(row[0] === undefined) {
            checkNickname.tf = true;
        } else {
            checkNickname.tf = false;
        }
        res.send(checkNickname);
    });
}

exports.login = (req,res) => {
    var users_login = [req.body.id, req.body.pw];
    db.connection.query('SELECT * FROM users WHERE user_id = ?', users_login[0], (err, row) => {
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
}

exports.loginchecked = (req,res) => {
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
}


exports.logout = (req,res) => {
    session.logined = false;
    if(session.logined == true) {
        console.log("삭제실패");
    } else {
        console.log("삭제성공");
    }
}
