const express = require("express");
const router = express.Router();
const Template1 = require('../models/template1');
const Template2 = require('../models/template2');
const Template3 = require('../models/template3');
const Template4 = require('../models/template4');

// INDEX
router.get('/', async (req, res) => {
    try {
        const templates1 = await Template1.find();
        const templates2 = await Template2.find();
        const templates3 = await Template3.find();
        const templates4 = await Template4.find();

        const templates = [];

        templates1.forEach(template => {
            templates.push({ ...template.toObject(), templateType: 'template1' });
        });
        templates2.forEach(template => {
            templates.push({ ...template.toObject(), templateType: 'template2' });
        });
        templates3.forEach(template => {
            templates.push({ ...template.toObject(), templateType: 'template3' });
        });
        templates4.forEach(template => {
            templates.push({ ...template.toObject(), templateType: 'template4' });
        });

        res.render('gallery/index.ejs', {
            templates
        });
    } catch (error) {
        res.status(500).send("Error retrieving templates: " + error.message);
    }
});


module.exports = router;