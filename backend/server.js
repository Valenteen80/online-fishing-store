const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const request = require('https');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_Secret = 'secret_key';

const users = [
    { email: 'Valenteen@gmai.com', password: '1234'},
    { email: 'Admin@gmai.com', password: '4321'}
];

app.post('/api/authenticate', (reg, res) => {
    if(reg.body) {
        const user = reg.body;
        let isPermission = false;
        let isEmail = false;        
        
        users.forEach((item) => {

            if (item.email === user.email) {
                isEmail = true;

                if(item.password === user.password) {
                    isPermission = true;
                }
            }
        });

        if (isPermission) {
            let token = jwt.sign(user, JWT_Secret, {expiresIn: 60 * 30});
            res.status(200).send({token: token});
        } else if (!isEmail){
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
