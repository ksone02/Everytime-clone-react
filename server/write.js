const db = require('./db');

exports.writeFreeIn = (req,res) => {
    var today = new Date();
    var boardInfo = {
        "title": req.body.title,
        "content": req.body.content,
        "userNickname": req.body.userNickname,
        "isAnony": req.body.isAnony,
        "date": today,
        "board": req.body.board
    }

    db.connection.query('INSERT INTO board_free_in SET ?' , boardInfo, function (error, results, fields) {
        if (error) {
            console.log("에러발생");
        } else {
            console.log(boardInfo);
        }
    });    
}

exports.writeCheck = (req,res) => {
    db.connection.query('SELECT * FROM board_free_in WHERE board = ? order by number desc', [req.body.board],function(error, results) {
        if(error) console.log("오류발생");
        if(results) {
            res.send(results);
        }
    });
}

exports.postDetail = (req,res) => {
    db.connection.query('SELECT * FROM board_free_in WHERE number = ?', [req.body.number], function(err, result) {
        if(err) console.log("오류");
        if(result) {
            res.send(result);
        }
    });
}

exports.myarticles = (req,res) => {
    db.connection.query('SELECT * FROM board_free_in WHERE userNickname = ? order by number desc', [req.body.userNickname], function(err, result) {
        if(err) console.log("error");
        if(result) {
            res.send(result);
        }
    });
}

exports.like = (req,res) => {
    db.connection.query('UPDATE board_free_in SET likeNum = likeNum + 1 WHERE number = ?', [req.body.number], function(err, result) {
        if(err) console.log("좋아요 + 1 오류:" +err );
        if(result) {
            console.log("좋아요 + 1");
            console.log(result);
        }
    });
}
exports.dislike = (req,res) => {
    db.connection.query('UPDATE board_free_in SET likeNum = likeNum - 1 WHERE number = ?', [req.body.number], function(err, result) {
        if(err) console.log("좋아요 - 1오류");
        if(result) {
            console.log("좋아요 - 1");
        }
    });
}

exports.famouswrite = (req,res) => {
    db.connection.query('SELECT * FROM board_free_in ORDER BY likeNum DESC LIMIT 1', (err, result) => {
        if(err) console.log(err);
        if(result) {
            res.send(result)
        };
    });
}

exports.checkboard = (req, res) => {
    if(req.body.boardNumber){
        db.connection.query('SELECT boardName FROM board WHERE boardNumber = ?', [req.body.boardNumber], (err,result) => {
            if(err) console.log(err);
            if(result) {
                res.send(result);
                console.log(result);
            }
        });
    }
}

exports.hotarticles = (req, res) => {
    db.connection.query("SELECT * FROM board_free_in WHERE likeNum >= 10", (err, result) => {
        if(err) console.log(err);
        if(result) {
            res.send(result);
        }
    });
}