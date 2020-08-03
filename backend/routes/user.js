const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const validation = require('../validation/validation');
const jwt = require('jsonwebtoken');


const router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body.EmailName);
    console.log(req.body.Passwort);
    let fetchedUser;

    User.findOne({ EmailName: req.body.EmailName })
        .then((user) => {

            if (!user) {
                return res.status(404).json({
                    message: "auth failed!!"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.Passwort, user.Passwort)
        })
        .then(result => {
            if (!result) {
                return res.status(404).json({
                    message: "auth failed!!"
                });
            }

            const token = jwt.sign({ EmailName: fetchedUser.EmailName, userId: fetchedUser._id }, "secrect_this_should_be_longer");
            console.log(token);

            res.status(200).json({
                token: token
            })

        })
        .catch(err => {
            res.status(404).json({
                message: "Auth failed!!"
            });
        })

    // User.findOne({ EmailName: req.body.EmailName })
    //     .then((user) => {
    //         console.log(user);
    //         if (!user) {
    //             return res.status(404).json({
    //                 message: "Auth failed!!"
    //             });
    //         }

    //         // fetchedUser = user;

    //         //return bcrypt.compare(req.body.Passwort, user.Passwort);
    //     })
    // .then(result => {
    //     if (!result) {
    //         return res.status(404).json({
    //             message: "Auth failed!!"
    //         });
    //     }

    //     const token = jwt.sign({ EmailName: fetchedUser.EmailName, userId: fetchedUser._id }, "secret_this_should_longer");

    //     res.status(200).json({
    //         token: token
    //     })

    // })
    // .catch(err => {
    //     res.status(404).json({
    //         message: "Auth failed!!"
    //     });
    // });
});

router.post('/signup', (req, res) => {
    //console.log(req.body.Passwort);
    const result = validation(req.body);
    if (result.error) {
        res.status(404).send(result.error.details[0].message);
        return;
    }
    bcrypt.hash(req.body.Passwort, 10)
        .then(hash => {
            const user = new User({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                EmailName: req.body.EmailName,
                Passwort: hash,
                confirmPasswort: hash

            });

            user.save()
                .then((response) => {
                    //console.log(response);
                    res.status(201).json({
                        message: "data post successfully",
                        post: response
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        })

});

module.exports = router;