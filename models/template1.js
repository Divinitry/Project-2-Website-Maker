const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template1Schema = new Schema({
    bodyBgColor: { type: String, required: true},
    navbarBgColor: { type: String, required: true },
    navbarBrandColor: { type: String, required: true },
    navbarLinkColor: { type: String, required: true },
    titleColor: { type: String, required: true },
    subtitleColor: { type: String, required: true },
    secondNavbarBgColor: { type: String, required: true },
    buttonBgColor: { type: String, required: true },
    buttonTextColor: { type: String, required: true },
    secondNavLinkColor: { type: String, required: true },
    subtitlePColor: { type: String, required: true },
    postH4Color: { type: String, required: true },
    postPColor: { type: String, required: true },
    overlayBgColor: { type: String, required: true },
    overlayTextColor: { type: String, required: true },
    footerBgColor: { type: String, required: true },
    footerNavLinkColor: { type: String, required: true },
    footerSocialLinkColor: { type: String, required: true },
    copyrightTextColor: { type: String, required: true },
    companyName: { type: String, required: true },
    brandName: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    blogName: { type: String, required: true },
    blogPost: { type: String, required: true },
    iconImage1: { type: String, required: true },
    iconImage2: { type: String, required: true }
});

const Template1 = mongoose.model('Template1', template1Schema);

module.exports = Template1;
