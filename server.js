const express = require('express')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const homeRouter = require('./controller/home');
const templateRouter = require('./controller/templates');
const galleryRouter = require('./controller/gallery');

const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use(express.static('public')); 

app.use('/sitefy', homeRouter);
app.use('/sitefy/templates', templateRouter);
app.use('/sitefy/gallery', galleryRouter);

const mongoURI = "mongodb://127.0.0.1:27017/websites" 
// "mongodb+srv://spencer:sebpt319@sebpt319.9ktotgf.mongodb.net/"

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