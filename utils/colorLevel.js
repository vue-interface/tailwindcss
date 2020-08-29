const mix = require('./mix');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = function(color, level, black, white) {
    if(!black) {
        black = colors.black;
    }

    if(!white) {
        white = colors.white;
    }

    return mix((level > 0 ? black : white), color, Math.abs(level) * .08);
};