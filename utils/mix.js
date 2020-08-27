const Color = require('color');

module.exports = function(color, subject, percent) {
    return Color(color).mix(Color(subject), percent).hex();
}