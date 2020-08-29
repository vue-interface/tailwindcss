const escapedCharacters = {
    '<': '%3c',
    '>': '%3e',
    '#': '%23',
    '(': '%28',
    ')': '%29',
};

module.exports = function(str) {
    if(str.match('data:image/svg+xml')) {
        Object.entries(escapedCharacters)
            .reduce((carry, [char, encoded]) => {
                if(carry.match(/url\(/)) {
                    return `url(${str.slice(6, -3).replace(new RegExp(char, 'g'), encoded)})`;
                }

                return str.replace(new RegExp(char, 'g'), encoded);
            }, str);
    }
    
    return str;
};