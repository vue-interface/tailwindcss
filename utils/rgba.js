const Color = require('color');
const hexToRgba = require('hex-to-rgba');

module.exports = function(color, percent) {
    return hexToRgba(Color(color).hex(), percent);
}