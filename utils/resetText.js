module.exports = function(subject, theme) {
    const fontWeight = 400;
    const lineBase = 1.5;

    return Object.assign({
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontWeight: theme ? theme('interface.fontWeight.normal', fontWeight) : fontWeight,
        lineHeight: theme ? theme('interface.lineHeight.base', lineBase) :  lineBase,
        textAlign: 'left',
        textAlign: 'start',
        textDecoration: 'none',
        textShadow: 'none',
        textTransform: 'none',
        letterSpacing: 'normal',
        wordBreak: 'normal',
        wordSpacing: 'normal',
        lineBreak: 'auto'
    }, subject);
};