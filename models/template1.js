const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template1Schema = new Schema({
    title: String,
    content: String,
    image1: String,
    image2: String,
    style: String,
    backgroundImage: String,
});

const Template1 = mongoose.model('Template1', template1Schema);

module.exports = Template1;