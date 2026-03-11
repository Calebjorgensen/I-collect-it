const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

router.get('/home', (req, res) => {
    res.send("Hello World");
});

router.get('/profile', (req, res) => {
    res.send("Profile Page");
});

router.get('/login', (req, res) => {
    res.send("Login Page");
});



app.use(bodyParser.json());
app.use('/', router);

const port = 3000;

app.listen(process.env.PORT || port);
console.log("Web server is listening at port" + (process.env.PORT || port));