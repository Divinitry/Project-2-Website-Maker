const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template3Schema = new Schema({
    title: String,
    content: String,
    image1: String,
    image2: String,
    style: String,
    backgroundImage: String,
});

const Template3 = mongoose.model('Template3', template3Schema);

module.exports = Template3;