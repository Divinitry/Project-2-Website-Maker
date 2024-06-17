const mongoose = require('mongoose')
const Schema = mongoose.Schema

const websiteSchema = new Schema({

})

const Website = mongoose.model('Website', websiteSchema)

module.exports = Website