const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수

const cors = require('cors');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const axios = require('axios');

const db = require('./db');
const auth = require('./auth');
const write = require('./write');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

axios.defaults.withCredentials = true;

db.connection.connect();

app.use(cors({
    origin: true,
    credentials: true,
}))

app.use(cookieParser());

app.get('/', (req, res) =>{
    res.send('서버 온!');
});

app.post('/register', auth.register);
app.post('/login',cors(), auth.login);
app.post('/checkid', auth.checkid);
app.post('/checkemail', auth.checkemail);
app.post('/checknickname', auth.checknickname);
app.post('/loginchecked', auth.loginchecked);
app.post('/logout', auth.logout);

app.post('/writeFreeIn', write.writeFreeIn);
app.post('/writeCheck', write.writeCheck);
app.post('/postDetail', write.postDetail);
app.post('/myarticles', write.myarticles);
app.post('/like', write.like);
app.post('/dislike', write.dislike);
app.post('/famouswrite', write.famouswrite);


app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
});