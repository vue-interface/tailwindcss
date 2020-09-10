const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const { rgba, darken, multiply } = require('./utils');
const defaultVariations = require('./defaultVariations');

module.exports = plugin(function({ theme, addComponents }) {
    addComponents({
        '.fade': {
            transition: theme('interface.transition.fade'),
        },

        '.fade:not(.show)': {
            opacity: 0,
        },
          
        '.collapse:not(.show)': {
            display: 'none'
        },
          
        '.collapsing': {
            height: 0,
            overflow: 'hidden',
            transition: theme('interface.transition.collapse'),
        },

        '.close': {
            fontSize: theme('close.fontSize'),
            fontWeight: theme('close.fontWeight'),
            lineHeight: 1,
            color: theme('close.color'),
            textShadow: theme('close.textShadow'),
            opacity: .5,
        },
        
        // Override <a>'s hover style
        '.close:hover': {
            color: theme('close.color'),
            textDecoration: 'none',
        },
        
        '.close:hover, .close:focus': {
            opacity: .75
        },
        
        '.close:disabled, .close.disabled': {
            pointerEvents: 'none'
        },
          
        // Additional properties for button version
        // iOS requires the button element instead of an anchor tag.
        // If you want the anchor version, it requires `href="#"`.
        // See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
        
        // stylelint-disable-next-line selector-no-qualifying-type
        'button.close': {
            padding: 0,
            backgroundColor: 'transparent',
            border: 0,
        }
          
    });
}, {
    theme: {
        close: theme => {
            return {
                fontSize: multiply(theme('interface.fontSize'), 1.5),
                fontWeight: theme('interface.fontWeight.bold'),
                color: theme('colors.black', colors.black),
                textShadow: `0 1px 0 ${theme('colors.white', colors.white)}`,
            };
        },
        interface: theme => {
            const variations = Object.assign(defaultVariations, {
                primary: theme('colors.blue.500', colors.blue['500']),
                secondary: theme('colors.gray.600', colors.gray['600']),
                danger: theme('colors.red.600', colors.red['600']),
                success: theme('colors.green.500', colors.green['500']),
                warning: theme('colors.orange.500', colors.orange['500']),
                info: theme('colors.teal.400', colors.teal['400']),
                dark: theme('colors.gray.800', colors.gray['800']),
                light: theme('colors.gray.100', colors.gray['100']),
                muted: theme('colors.white', colors.white)
            });

            return {
                active: {
                    color: theme('colors.white', colors.white),
                    backgroundColor: variations.primary
                },
                body: {
                    color: theme('colors.gray.900', colors.gray[900]),
                    backgroundColor: theme('colors.white', colors.white),
                    textDecoration: undefined
                },
                borderRadius: {
                    sm: '.2rem',
                    base: '.25rem',
                    lg: '.3rem'
                },
                boxShadow: {
                    sm: `0 .5rem 1rem ${rgba(theme('colors.black', colors.black), .075)}`,
                    base: `0 .5rem 1rem ${rgba(theme('colors.black', colors.black), .15)}`,
                    lg: `0 .5rem 1rem ${rgba(theme('colors.black', colors.black), .175)}`,
                },
                borderColor: theme('colors.gray.300', colors.gray[300]),
                borderWidth: '1px',
                caret: {
                    widht: '.3em',
                    verticalAlign: '.255em',
                    spacing: '.255em'
                },
                container: {
                    paddingX: '1rem',
                    minWidth: {
                        sm: '540px',
                        base: '720px',
                        lg: '960px',
                        xl: '1140px',
                        xxl: '1320px'
                    }
                },
                enable: {
                    caret: true,
                    rounded: true,
                    shadows: false,
                    gradients: false,
                    transitions: true,
                    reducedMotion: true,
                    gridClasses: true,
                    buttonPointers: true,
                    rfs: true,
                    validationIcons: true,
                    negativeMargins: false,
                    deprecationMessages: true,
                    importantUtilities: true,
                },
                fontSize: {
                    sm: '.875rem',
                    base: '1rem',
                    lg: '1.25rem',
                },
                fontWeight: {
                    lighter: 'lighter',
                    light: 300,
                    normal: 400,
                    base: 400,
                    bold: 700,
                    bolder: 'bolder',
                },
                gradient: `linear-gradient(180deg, ${rgba(theme('colors.white', colors.white), .15)}, ${rgba(theme('colors.white', colors.white), 0)})`,
                hr: {
                    marginY: '1rem',
                    color: 'inherit',
                    height: '1px',
                    opacity: .25
                },
                input: {
                    paddingY: '.375rem',
                    paddingX: '.75rem',
                    focus: {
                        width: '.2rem',
                        colorOpacity: .25,
                        color: rgba(variations.primary, .25),
                        boxShadow: `0 0 0 .2rem ${rgba(variations.primary, .25)}`
                    },
                    sm: {
                        paddingY: '.25rem',
                        paddingX: '.5rem',
                    },
                    lg: {
                        paddingY: '.5rem',
                        paddingX: '1rem',
                    }
                },
                lineHeight: {
                    sm: 1.25,
                    base: 1.5,
                    lg: 2
                },
                link: {
                    color: variations.primary,
                    textDecoration: 'underline',
                    hover: {
                        color: darken(variations.primary, .15),
                        textDecoration: undefined,
                        darkness: .15
                    }
                },
                spacer: '1rem',
                spacers: {
                    0: 0,
                    1: '.25rem',
                    2: '.5rem',
                    3: '1rem',
                    4: '1.5rem',
                    5: '3rem',
                },
                transition: {
                    base: 'all .2s ease-in-out',
                    fade: 'opacity .15s linear',
                    collapse: 'height .35s ease',
                },
                variations,
                zIndex: {
                    dropdown: 1000,
                    sticky: 1020,
                    fixed: 1030,
                    modalBackdrop: 1040,
                    modal: 1050,
                    popover: 1060,
                    tooltip: 1070,
                }
            };
        }
    }
});