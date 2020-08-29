const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    //
}, {
    theme: {
        interface: theme => ({
            active: {
                color: theme('colors.white', colors.white),
                backgroundColor: theme('variations.primary', defaultVariations.primary)
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
                sm: `0 .5rem 1rem rgba(${theme('colors.black', colors.black)}, .075)`,
                base: `0 .5rem 1rem rgba(${theme('colors.black', colors.black)}, .15)`,
                lg: `0 .5rem 1rem rgba(${theme('colors.black', colors.black)}, .175)`,
            },
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
            gradient: `linear-gradient(180deg, rgba(${theme('colors.white', colors.white)}, .15), rgba(${theme('colors.white', colors.white)}, 0))`,
            hr: {
                marginY: '1rem',
                color: 'inherit',
                height: '1px',
                opacity: .25
            },
            lineHeight: {
                sm: 1.25,
                base: 1.5,
                lg: 2
            },
            link: {
                color: theme('variations.primary', defaultVariations.primary),
                textDecoration: 'underline',
                hover: {
                    color: darken(theme('variations.primary', defaultVariations.primary), .15),
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
                collapse: 'height .35ss ease',
            },
            variations: {
                'primary': theme('colors.blue.500', colors.blue['500']),
                'secondary': theme('colors.gray.600', colors.gray['600']),
                'danger': theme('colors.red.600', colors.red['600']),
                'success': theme('colors.green.500', colors.green['500']),
                'warning': theme('colors.orange.500', colors.orange['500']),
                'info': theme('colors.teal.400', colors.teal['400']),
                'dark': theme('colors.gray.800', colors.gray['800']),
                'light': theme('colors.gray.100', colors.gray['100']),
                'muted': theme('colors.white', colors.white)
            }
        })
    }
});