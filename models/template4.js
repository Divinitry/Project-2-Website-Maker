const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template4Schema = new Schema({
    title: String,
    content: String,
    image1: String,
    image2: String,
    style: String,
    backgroundImage: String,
});

const Template4 = mongoose.model('Template4', template4Schema);

module.exports = Template4;