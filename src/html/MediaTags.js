const helpers = require('./helpers.js');

const MediaTags = {
    Image(link) {
        let linkParts;
        try {
            linkParts = helpers.separateTextAndURL(link);
            return `<img src="${linkParts.url}" alt="${linkParts.text}"/>`;
        } catch (e) {
            throw e;
        }
    },
    Link(link) {
        let linkParts;
        try {
            linkParts = helpers.separateTextAndURL(link);
            return `<a href="${linkParts.url}">${linkParts.text}</a>`;
        } catch (e) {
            throw e;
        }
    }
};

module.exports = MediaTags;