const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template2Schema = new Schema({
    title: String,
    content: String,
    image1: String,
    image2: String,
    style: String,
    backgroundImage: String,
});

const Template2 = mongoose.model('Template2', template2Schema);

module.exports = Template2;