const express = require('express');
const multer = require('multer');
const Post = require('../model/post');
const { response } = require('express');

const router = express.Router();

const mime_type_variable = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = mime_type_variable[file.mimetype];
        console.log(ext);
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});

var upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res, next) => {

    const url = req.protocol + '://' + req.get('host');
    const file = req.file;

    const data = new Post({
        title: req.body.title,
        details: req.body.details,
        imagePath: url + "/images/" + req.file.filename
    });

    if (!file) {
        return res.status(400).json({
            message: "file not upload"
        });
    }

    console.log(data);

    data.save()
        .then(resoponse => {
            res.status(200).json({
                message: "post added successfully",
                post: data
            })
        }).catch(err => {
            console.log(err);
        })

});

router.get('', (req, res) => {
    Post.find()
        .then((documents) => {
            res.status(200).json({
                post: documents
            });
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;