const Color = require('color');

module.exports = function(color, ...args) {
    return Color(color).darken(...args).hex();
};