const { parse } = require("units-css");

module.exports = function(str, subsctrator) {
    const { value, unit } = parse(str);

    return `${value - subsctrator}${unit}`;
};