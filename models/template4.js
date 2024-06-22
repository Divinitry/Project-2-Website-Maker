const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template4Schema = new Schema({
    restaurantname: {
        type: String,
        required: true
    },
    backgroundimage: {
        type: String,
        required: true
    },
    headerh1: {
        type: String,
        required: true
    },
    headerp: {
        type: String,
        required: true
    },
    fontcolor: {
        type: String,
        required: true
    }
});

const Template4 = mongoose.model('Template4', template4Schema);

module.exports = Template4;
