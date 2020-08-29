
module.exports = function flatten(values, prefix = null, delimeter = '-') {
    return Object.entries(values).reduce((carry, [key, value]) => {
        if(typeof value === 'object') {
            return Object.assign(carry, flatten(value, `${prefix || ''}${key}` + delimeter, delimeter));
        }
        
        return Object.assign(carry, {
            [`${prefix || ''}${key}`]: value
        });
    }, {});
};