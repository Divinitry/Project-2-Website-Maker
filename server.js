const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const websitesController = require('./controller/websites')
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use('/sitefy', websitesController)
app.use(express.static('public')); 

const mongoURI = "mongodb://127.0.0.1:27017/websites"

// MONGODB
async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log('The connection with MongoDB is established');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongo();

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});