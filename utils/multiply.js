const { parse } = require("units-css");

module.exports = function(str, numerator) {
    const { value, unit } = parse(str);

    return `${value * numerator}${unit}`;
};