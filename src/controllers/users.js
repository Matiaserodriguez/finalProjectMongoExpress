const db = require('../models');
const User = db.users;
const { getOauthUrl } = require('../helpers/googleURI');

exports.getOauthUser = (req, res) => {
    res.redirect(getOauthUrl())
}

exports.getUserInfo = async (req, res) => {
    try{
        const user = await User.findOne({email: req.email});
        res.status(200).json(user);
    } catch(e) {
        console.log(e);
        res.status(400).json({status: 400, msg: 'Something went wrong, please try again'});
    }
}

exports.putUser = async(req, res) => {
    const body = req.body

        try{
            const fieldsToUpdate = {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                picture: body.picture,
                locale: body.locale,
            }   

            let userToUpdate = await User.updateOne({ email: req.email }, fieldsToUpdate);

            if (userToUpdate.modifiedCount === 0){
                res.status(400).json({status: 400, msg: 'Verify you are modifying something'});
                return
            }

            const user = await User.findOne({email: req.email}, {createdAt: 0, updatedAt: 0});

            res.status(200).json(user);
            return

        } catch(e) {
            console.log(e)
            res.status(400).json({status: 400, msg: 'Verify the ID is a valid one'});
            return
        }
};
