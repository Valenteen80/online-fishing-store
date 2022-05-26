const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const request = require('https');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_Secret = 'secret_key';
let testUser = { email: 'Valenteen@gmai.com', password: '1234'};

app.post('/api/authenticate', (reg,res) => {
    if(reg.body) {
        let user = reg.body;

        if (testUser.email === user.email && testUser.password === user.password) {
            let token = jwt.sign(user, JWT_Secret, {expiresIn: 60 * 30});
            res.status(200).send({token: token});
        } else if (testUser.email !== user.email){
            res.status(403).send({
                errorMessage: 'Пользователь с таким адресом электронной почты не существует'
            });
        } else {
            res.status(403).send({
                errorMessage: 'Неверный пароль'
            });
        }

    } else {
        res.status(403).send({
            errorMessage: 'Пожалуйста, укажите адрес электронной почты и пароль'
        });
    }
})

app.listen(5000, () => {
    console.log('Application listening on port 5000!');
});
