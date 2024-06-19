const express = require("express");
const router = express.Router();
const Template1 = require('../models/template1');
const Template2 = require('../models/template2');
const Template3 = require('../models/template3');
const Template4 = require('../models/template4');

// I N D U C E S 

// INDEX
router.get('/', (req, res) => {
    res.render('templates/index.ejs')
})

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW


module.exports = router;