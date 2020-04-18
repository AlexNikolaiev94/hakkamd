const helpers = require('./helpers.js');

const MediaTags = {
    parseImg(link) {
        const { text, url } = helpers.separateTextAndURL(link.slice(1));
        return `<img src="${url}" alt="${text}"/>`;
    },
    parseLink(link) {
        const { text, url } = helpers.separateTextAndURL(link);
        return `<a href="${url}">${text}</a>`;
    }
};

module.exports = MediaTags;
