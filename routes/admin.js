const path = require('path');
const express = require('express');
const multer = require('multer');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'image');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    },

});
// const fileFilter = (req, file, callback) => {
//     if (
//         file.mimetype === 'image\png' ||
//         file.mimetype === 'image\jpg' ||
//         file.mimetype === 'image\jpeg'
//     ) {
//         callback(null, true);
//     } else {
//         callback(null, false);
//     }
// };

const uploadIMG = multer({ storage: fileStorage })

router.post('/add-product', uploadIMG.single('imageFile'), (req, res, next) => {
    console.log('req.file', req.file);
    res.send({ "Result": "success" });
    return null
});

module.exports = router;