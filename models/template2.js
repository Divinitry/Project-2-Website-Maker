const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template2Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    leftImage: {
        type: String,
        required: true
    },
    rightImage: {
        type: String,
        required: true
    },
    titleColor: {
        type: String,
        required: true
    },
    navLinkColor: {
        type: String,
        required: true
    },
    buttonBackgroundColor: {
        type: String,
        required: true
    },
    buttonTextColor: {
        type: String,
        required: true
    },
    shopitem: {
        type: String,
        required: true
    }
});

const Template2 = mongoose.model('Template2', template2Schema);

module.exports = Template2;
