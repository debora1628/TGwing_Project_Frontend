import jwt from 'jsonwebtoken';

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function generateToken(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                jwtSecret,
                {
                    expiresIn : '1d'
                }, (error, token) =>{
                    if(error) reject(error);
                    resolve(token);
                }
            );
        }
    );
};

exports.generateToken = generateToken;