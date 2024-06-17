const express = require("express");
const router = express.Router();
const Websites = require("../models/websites")

// I N D U C E S 

// INDEX
router.get('/', (req, res) => {
    res.render('index.ejs')
})

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW


module.exports = router;