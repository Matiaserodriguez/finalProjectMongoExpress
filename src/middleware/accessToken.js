require('dotenv').config();
const axios = require('axios');
const qs = require('qs');

const jwt_decode = require('jwt-decode');

const db = require('../models');
const User = db.users;


exports.getAccessToken = async (req, res, next) => {
    const baseURL = 'https://oauth2.googleapis.com/token';

    const values = {
        code: req.query.code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT,
        grant_type: 'authorization_code',
    };

    try {
        const response = await axios.post(baseURL, qs.stringify(values), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })

        const userInfo = jwt_decode(response.data.id_token)

        const user = await User.findOne({email: userInfo.email});

        req.accessToken = {
            access_token: response.data.access_token
        }

        if (!user) {
            const newUser = new User({
                firstName: userInfo.given_name,
                lastName: userInfo.family_name,
                email: userInfo.email,
                picture: userInfo.picture,
                locale: userInfo.locale
            });
    
            await newUser.save(newUser);
        }

        next();
    } catch(e){
        console.log(e)
        res.status(400).json({msg: 'Something went wrong'})
    }
};
