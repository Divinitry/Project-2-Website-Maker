const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template3Schema = new Schema({
    newstitle: {
        type: String,
        required: true
    },
    subtitle1: {
        type: String,
        required: true
    },
    paragraph1: {
        type: String,
        required: true
    },
    subtitle2: {
        type: String,
        required: true
    },
    paragraph2: {
        type: String,
        required: true
    },
    subtitle3: {
        type: String,
        required: true
    },
    paragraph3: {
        type: String,
        required: true
    },
    subtitle4: {
        type: String,
        required: true
    },
    paragraph4: {
        type: String,
        required: true
    },
    subtitle5: {
        type: String,
        required: true
    },
    paragraph5: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    headlineimage: {
        type: String,
        required: true
    },
    headlinep: {
        type: String,
        required: true
    }
});

const Template3 = mongoose.model('Template3', template3Schema);

module.exports = Template3;
