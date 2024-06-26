const express = require("express");
const router = express.Router();
const Template1 = require('../models/template1');
const Template2 = require('../models/template2');
const Template3 = require('../models/template3');
const Template4 = require('../models/template4');

// Individual template routes
router.get('/template1', (req, res) => {
    res.render('templates/template1.ejs');
});

router.get('/template2', (req, res) => {
    res.render('templates/template2.ejs');
});

router.get('/template3', (req, res) => {
    res.render('templates/template3.ejs');
});

router.get('/template4', (req, res) => {
    res.render('templates/template4.ejs');
});

// INDEX
router.get('/', (req, res) => {
    res.render('templates/index.ejs');
});

// NEW
router.get('/new', (req, res) => {
    const { template } = req.query;
    res.render('templates/new.ejs', { 
        template 
    });
});

// DELETE
router.delete('/:id', async (req, res) => {
    const templateId = req.params.id;
    const templateType = req.query.type;
    try {
        if (templateType === "template1") {
            await Template1.findByIdAndDelete(templateId);
        } else if (templateType === "template2") {
            await Template2.findByIdAndDelete(templateId);
        } else if (templateType === "template3") {
            await Template3.findByIdAndDelete(templateId);
        } else if (templateType === "template4") {
            await Template4.findByIdAndDelete(templateId);
        }
        res.redirect("/sitefy/gallery");
    } catch (error) {
        console.error("Error deleting template: ", error);
        res.status(500).send("Error deleting template: " + error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const templateId = req.params.id;
    const templateType = req.query.type;
    console.log("Template Type:", templateType);

    let updatedTemplate;
    try {
        if (templateType === "template1") {
            updatedTemplate = await Template1.findByIdAndUpdate(templateId, req.body, { new: true });
        } else if (templateType === "template2") {
            updatedTemplate = await Template2.findByIdAndUpdate(templateId, req.body, { new: true });
        } else if (templateType === "template3") {
            updatedTemplate = await Template3.findByIdAndUpdate(templateId, req.body, { new: true });
        } else if (templateType === "template4") {
            updatedTemplate = await Template4.findByIdAndUpdate(templateId, req.body, { new: true });
        }
        if (!updatedTemplate) {
            return res.status(404).send("No template found with that ID.");
        }
        res.redirect('/sitefy/gallery');
    } catch (error) {
        console.error("Update error:", error);
        res.status(400).send("Error updating template: " + error.message);
    }
});



// CREATE
router.post('/create', async (req, res) => {
    const { template, ...data } = req.body;
    try {
        let newInstance;
        if (template === 'template1') {
            newInstance = new Template1(data);
        } else if (template === 'template2') {
            newInstance = new Template2(data);
        } else if (template === 'template3') {
            newInstance = new Template3(data);
        } else if (template === 'template4') {
            newInstance = new Template4(data);
        } else {
            return res.status(400).send("Please select a template");
        }
        await newInstance.save();
        res.redirect('/sitefy/gallery');
    } catch (error) {
        res.status(500).send("Error creating template instance: " + error.message);
    }
});

// EDIT
router.get('/:id/edit', async (req, res) => {
    const templateId = req.params.id;
    let template;
    let templateType;

    try {
        template = await Template1.findById(templateId);
        if (template) {
            templateType = 'template1';
        } else {
            template = await Template2.findById(templateId);
            if (template) {
                templateType = 'template2';
            } else {
                template = await Template3.findById(templateId);
                if (template) {
                    templateType = 'template3';
                } else {
                    template = await Template4.findById(templateId);
                    if (template) {
                        templateType = 'template4';
                    }
                }
            }
        }
        res.render('gallery/edit.ejs', {
            template: template.toObject(),
            templateType: templateType
        });
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});


// SHOW
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    let template;
    let templateType;
    try {
        template = await Template1.findById(id);
        if (template) {
            templateType = 'template1';
        } else {
            template = await Template2.findById(id);
            if (template) {
                templateType = 'template2';
            }
            else {
                template = await Template3.findById(id);
                if (template) {
                    templateType = 'template3';
                }
                else {
                    template = await Template4.findById(id);
                    if (template) {
                        templateType = 'template4';
                    }
                }
            }
        }
        res.render('gallery/show.ejs', {
            template: template.toObject(),
            templateType: templateType
        });
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

module.exports = router;