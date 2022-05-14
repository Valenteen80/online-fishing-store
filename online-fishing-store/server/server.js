const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const { request } = require('https');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_Secret = 'your_secret_key';

let testUser = { email: 'Valenteen@gmai.com', password: '1234'};

app.post('/api/authenticate', (reg,res) => {
    if(reg.body) {
        let user = reg.body;
        console.log(user);

        if (testUser.email === user.email && testUser.password === user.password) {
            let token = jwt.sign(user, JWT_Secret);
            res.status(200).send({
                signed_user: user,
                token: token
            })

        } else {
            res.status(403).send({
                errorMessage: 'Требуется авторизация!'
            });
        }

    } else {
        res.status(403).send({
            errorMessage: 'Пожалуйста, укажите адрес электронной почты и пароль'
        });
    }

})

// app.listen(5000, () => console.log('Server started on port 5000'));
app.listen(5000, () => {
    console.log('Application listening on port 5000!');
});