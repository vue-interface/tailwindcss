const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const { rgba, darken, multiply } = require('./utils');
const defaultVariations = require('./defaultVariations');

module.exports = plugin(function({ theme, addComponents }) {
    // Align Component
    const align = {
        '.align-baseline': {
            verticalAlign: 'baseline'
        },
        
        '.align-top': {
            verticalAlign: 'top'
        },
        
        '.align-middle': {
            verticalAlign: 'middle'
        },
        
        '.align-bottom': {
            verticalAlign: 'bottom'
        },
        
        '.align-text-bottom': {
            verticalAlign: 'text-bottom'
        },
        
        '.align-text-top': {
            verticalAlign: 'text-top'
        }
    };

    // Float
    // @todo: make floats responsive "float-left-sm", "float-left-md", etc...
    const float = {
        '.float-left': {
            float: 'left'
        },

        '.float-right': {
            float: 'right'
        }
    };
    
    // Overflow

    const overflow = {
        '.overflow-auto': {
            overflow: 'auto'
        },

        '.overflow-hidden': {
            overflow: 'hidden'
        },
    };

    // Display
    // @todo: make display responsive "d-none-sm", "d-none-md", etc...
    const display = {
        '.d-none': {
            display: 'none'
        },
        
        '.d-inline': {
            display: 'inline'
        },
        
        '.d-inline-block': {
            display: 'inline-block'
        },
        
        '.d-block': {
            display: 'none'
        },
        
        '.d-table': {
            display: 'table'
        },
        
        '.d-table-row': {
            display: 'table-row'
        },
        
        '.d-table-cell': {
            display: 'table-cell'
        },
        
        '.d-flex': {
            display: 'flex'
        },
        
        '.d-inline-flex': {
            display: 'inline-flex'
        },
    };

    // Shadow
    const shadow = {
        '.shadow': {
            boxShadow: theme('interface.boxShadow.base')
        },

        '.shadow-md': {
            boxShadow: theme('interface.boxShadow.sm')
        },
        
        '.shadow-lg': {
            boxShadow: theme('interface.boxShadow.lg')
        },

        '.shadow-none': {
            boxShadow: 'none'
        }
    };

    // Position
    const position = {
        '.position-static': {
            position: 'static'
        },

        '.position-relative': {
            position: 'relative'
        },

        '.position-absolute': {
            position: 'absolute'
        },

        '.position-fixed': {
            position: 'fixed'
        },

        '.position-sticky': {
            position: 'sticky'
        },
    };

    // Border
    const border = {
        '.border': {
            border: `${theme('interface.borderWidth')} solid ${theme('interface.borderColor')}`
        },

        '.border-top': {
            borderTop: `${theme('interface.borderWidth')} solid ${theme('interface.borderColor')}`
        },

        '.border-right': {
            borderRight: `${theme('interface.borderWidth')} solid ${theme('interface.borderColor')}`
        },

        '.border-bottom': {
            borderBottom: `${theme('interface.borderWidth')} solid ${theme('interface.borderColor')}`
        },

        '.border-left': {
            borderLeft: `${theme('interface.borderWidth')} solid ${theme('interface.borderColor')}`
        },
    };
    
    // Border Colors
    const borderColors = Object.fromEntries(Object.entries({...theme('interface.variations'), ...{
        white: theme('colors.white', colors.white),
    }}).map((borderColor, variation) => {
        return [`border-${variation}`, { borderColor }];
    }));

    // Sizing
    const sizing = {
        '.w-25': {
            width: '25%'
        },
        
        '.w-50': {
            width: '50%'
        },
        
        '.w-75': {
            width: '75%'
        },
        
        '.w-100': {
            width: '100%'
        },
        
        '.w-100': {
            width: '100%'
        },
        
        '.w-auto': {
            width: 'auto'
        },

        '.mw-100': {
            maxWidth: '100%'
        },

        '.vw-100': {
            width: '100vw'
        },

        '.min-vw-100': {
            minWidth: '100vw'
        },

        '.h-25': {
            height: '25%'
        },
        
        '.h-50': {
            height: '50%'
        },
        
        '.h-75': {
            height: '75%'
        },
        
        '.h-100': {
            height: '100%'
        },
        
        '.h-100': {
            height: '100%'
        },
        
        '.h-auto': {
            height: 'auto'
        },

        '.mh-100': {
            maxHeight: '100%'
        },

        '.vh-100': {
            height: '100vw'
        },

        '.min-vh-100': {
            minHeight: '100vw'
        },
    };
    
    // Flex
    const flex = {
        // @todo: make flex-fill responsive "flex-sm-fill", "flex-md-fill", etc...
        '.flex-fill': {
            flex: '1 1 auto'
        },

        // @todo: make responsive "flex-sm-grow", "flex-md-grow", etc...
        '.flex-grow': {
            flexDirection: 'row'
        },

        // @todo: make responsive "flex-sm-column", "flex-md-column", etc...
        '.flex-column': {
            flexDirection: 'column'
        },

        // @todo: make responsive "flex-sm-row-reverse", "flex-md-row-reverse", etc...
        '.flex-row-reverse': {
            flexDirection: 'row-reverse'
        },

        // @todo: make responsive "flex-sm-row-reverse", "flex-md-row-reverse", etc...
        '.flex-column-reverse': {
            flexDirection: 'column-reverse'
        },

        // @todo: make responsive "flex-sm-grow-0", "flex-md-grow-0", etc...
        '.flex-grow-0': {
            flexGrow: 0
        },

        // @todo: make responsive "flex-sm-grow-1", "flex-md-grow-1", etc...
        '.flex-grow-1': {
            flexGrow: 1
        },

        // @todo: make responsive "flex-sm-shrink-0", "flex-md-shrink-0", etc...
        '.flex-shrink-0': {
            flexShrink: 0
        },

        // @todo: make responsive "flex-sm-shrink-1", "flex-md-shrink-1", etc...
        '.flex-shrink-1': {
            flexShrink: 1
        },

        // @todo: make responsive "flex-sm-wrap", "flex-md-wrap", etc...
        '.flex-wrap': {
            flexWrap: 'wrap'
        },

        // @todo: make responsive "flex-sm-nowrap", "flex-md-nowrap", etc...
        '.flex-nowrap': {
            flexWrap: 'nowrap'
        },

        // @todo: make responsive "flex-sm-wrap-reverse", "flex-md-wrap-reverse", etc...
        '.flex-wrap-reverse': {
            flexWrap: 'wrap-reverse'
        },

        // @todo: make responsive "justify-content-sm-start", "justify-content-md-start", etc...
        '.justify-content-start': {
            justifyContent: 'flex-start'
        },

        // @todo: make responsive "justify-content-sm-end", "justify-content-md-end", etc...
        '.justify-content-end': {
            justifyContent: 'flex-end'
        },

        // @todo: make responsive "justify-content-sm-center", "justify-content-md-center", etc...
        '.justify-content-center': {
            justifyContent: 'center'
        },

        // @todo: make responsive "justify-content-sm-between", "justify-content-md-between", etc...
        '.justify-content-between': {
            justifyContent: 'space-between'
        },

        // @todo: make responsive "justify-content-sm-around", "justify-content-md-around", etc...
        '.justify-content-around': {
            justifyContent: 'space-around'
        },

        // @todo: make responsive "justify-content-sm-evenly", "justify-content-md-evenly", etc...
        '.justify-content-evenly': {
            justifyContent: 'space-evenly'
        },

        // @todo: make responsive "align-items-sm-start", "align-items-md-start", etc...
        '.align-items-start': {
            alignItems: 'flex-start'
        },

        // @todo: make responsive "align-items-sm-end", "align-items-md-end", etc...
        '.align-items-end': {
            alignItems: 'flex-end'
        },

        // @todo: make responsive "align-items-sm-center", "align-items-md-center", etc...
        '.align-items-center': {
            alignItems: 'center'
        },

        // @todo: make responsive "align-items-sm-baseline", "align-items-md-baseline", etc...
        '.align-items-baseline': {
            alignItems: 'baseline'
        },

        // @todo: make responsive "align-items-sm-stretch", "align-items-md-stretch", etc...
        '.align-items-stretch': {
            alignItems: 'stretch'
        },

        // @todo: make responsive "align-content-sm-start", "align-content-md-start", etc...
        '.align-content-start': {
            alignContent: 'flex-start'
        },

        // @todo: make responsive "align-content-sm-end", "align-content-md-end", etc...
        '.align-content-end': {
            alignContent: 'flex-end'
        },

        // @todo: make responsive "align-content-sm-center", "align-content-md-center", etc...
        '.align-content-center': {
            alignContent: 'center'
        },

        // @todo: make responsive "align-content-sm-space-between", "align-content-md-space-between", etc...
        '.align-content-space-between': {
            alignContent: 'space-between'
        },

        // @todo: make responsive "align-content-sm-space-around", "align-content-md-space-around", etc...
        '.align-content-space-around': {
            alignContent: 'space-around'
        },

        // @todo: make responsive "align-content-sm-stretch", "align-content-md-stretch", etc...
        '.align-content-stretch': {
            alignContent: 'stretch'
        },

        // @todo: make responsive "align-self-sm-auto", "align-self-md-auto", etc...
        '.align-self-auto': {
            alignSelf: 'auto'
        },

        // @todo: make responsive "align-self-sm-start", "align-self-md-start", etc...
        '.align-self-start': {
            alignSelf: 'flex-start'
        },

        // @todo: make responsive "align-self-sm-end", "align-self-md-end", etc...
        '.align-self-end': {
            alignSelf: 'flex-end'
        },

        // @todo: make responsive "align-self-sm-center", "align-self-md-center", etc...
        '.align-self-center': {
            alignSelf: 'center'
        },

        // @todo: make responsive "align-self-sm-baseline", "align-self-md-baseline", etc...
        '.align-self-baseline': {
            alignSelf: 'baseline'
        },

        // @todo: make responsive "align-self-sm-stretch", "align-self-md-stretch", etc...
        '.align-self-stretch': {
            alignSelf: 'stretch'
        },

        // @todo: make responsive "order-sm-first", "order-md-first", etc...
        '.order-first': {
            order: -1
        },

        // @todo: make responsive "order-sm-0", "order-md-0", etc...
        '.order-0': {
            order: 0
        },

        // @todo: make responsive "order-sm-0", "order-md-0", etc...
        '.order-1': {
            order: 1
        },

        // @todo: make responsive "order-sm-0", "order-md-0", etc...
        '.order-2': {
            order: 2
        },

        // @todo: make responsive "order-sm-0", "order-md-0", etc...
        '.order-3': {
            order: 3
        },

        // @todo: make responsive "order-sm-0", "order-md-0", etc...
        '.order-4': {
            order: 4
        },

        // @todo: make responsive "order-sm-0", "order-md-0", etc...
        '.order-5': {
            order: 5
        },

        // @todo: make responsive "order-sm-last", "order-md-last", etc...
        '.order-last': {
            order: 6
        },
    };

    // Margin
    const margin = {
        // @todo: make responsive "m-sm-0", "m-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, margin]) => {
            return [`m-${key}`, {
                margin
            }];
        })),

        // @todo: make responsive "mx-sm-0", "mx-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, margin]) => {
            return [`mx-${key}`, {
                marginLeft: margin,
                marginRight: margin
            }];
        })),

        // @todo: make responsive "my-sm-0", "my-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, margin]) => {
            return [`my-${key}`, {
                marginTop: margin,
                marginBottom: margin
            }];
        })),

        // @todo: make responsive "mt-sm-0", "mt-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, marginTop]) => {
            return [`mt-${key}`, {
                marginTop
            }];
        })),

        // @todo: make responsive "mr-sm-0", "mr-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, marginRight]) => {
            return [`mr-${key}`, {
                marginRight
            }];
        })),

        // @todo: make responsive "mb-sm-0", "mb-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, marginBottom]) => {
            return [`mb-${key}`, {
                marginBottom
            }];
        })),

        // @todo: make responsive "ml-sm-0", "ml-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, marginLeft]) => {
            return [`ml-${key}`, {
                marginLeft
            }];
        }))
    };

    // Padding
    const padding = {
        // @todo: make responsive "p-sm-0", "p-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, padding]) => {
            return [`p-${key}`, {
                padding
            }];
        })),

        // @todo: make responsive "px-sm-0", "px-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, padding]) => {
            return [`px-${key}`, {
                paddingLeft: padding,
                paddingRight: padding
            }];
        })),

        // @todo: make responsive "py-sm-0", "py-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, padding]) => {
            return [`py-${key}`, {
                paddingTop: padding,
                paddingBottom: padding
            }];
        })),

        // @todo: make responsive "pt-sm-0", "pt-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, paddingTop]) => {
            return [`pt-${key}`, {
                paddingTop
            }];
        })),

        // @todo: make responsive "pr-sm-0", "pr-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, paddingRight]) => {
            return [`pr-${key}`, {
                paddingRight
            }];
        })),

        // @todo: make responsive "pb-sm-0", "pb-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, paddingBottom]) => {
            return [`pb-${key}`, {
                paddingBottom
            }];
        })),

        // @todo: make responsive "ml-sm-0", "ml-md-0", etc...
        ...Object.fromEntries(Object.entries(theme('interface.spacers')).map(([key, paddingLeft]) => {
            return [`ml-${key}`, {
                paddingLeft
            }];
        }))
    };

    // Text
    const text = {
        'font-weight-light': {
            fontWeight: theme('interface.fontWeight.light')
        },

        'font-weight-lighter': {
            fontWeight: theme('interface.fontWeight.lighter')
        },

        'font-weight-normal': {
            fontWeight: theme('interface.fontWeight.normal')
        },

        'font-weight-bold': {
            fontWeight: theme('interface.fontWeight.bold')
        },

        'font-weight-bolder': {
            fontWeight: theme('interface.fontWeight.bolder')
        },
        
        '.text-lowercase': {
            textTransform: 'lowercase'
        },
        
        '.text-uppercase': {
            textTransform: 'uppercase'
        },
        
        '.text-capitalize': {
            textTransform: 'capitalize'
        },
        
        // @todo: make responsive "text-sm-left", "text-md-left", etc...
        '.text-left': {
            textAlign: 'left'
        },
        
        // @todo: make responsive "text-sm-right", "text-md-right", etc...
        '.text-right': {
            textAlign: 'right'
        },
        
        // @todo: make responsive "text-sm-center", "text-md-center", etc...
        '.text-center': {
            textAlign: 'center'
        }
    };

    // Text Colors
    const textColors = Object.fromEntries(Object.entries({...theme('interface.variations'), ...{
        white: theme('colors.white', colors.white),
        body: theme('interface.body.color'),
        'black-50': rgba(theme('colors.black', colors.black), .5),
        'white-50': rgba(theme('colors.white', colors.white), .5),
        'reset': 'inherit'
    }}).map((color, variation) => {
        return [`text-${variation}`, { color }];
    }));
    
    // Line Height
    const lineHeight = {
        '.lh-1': {
            lineHeight: 1
        },
        
        '.lh-sm': {
            lineHeight: theme('interface.lineHeight.sm')
        },
        
        '.lh-base': {
            lineHeight: theme('interface.lineHeight.base')
        },
        
        '.lh-lg': {
            lineHeight: theme('interface.lineHeight.lg')
        }
    };
    
    // Background Colors
    const backgroundColors = Object.fromEntries(Object.entries({...theme('interface.variations'), ...{
        white: theme('colors.white', colors.white),
        body: theme('interface.body.color'),
        'transparent': 'transparent'
    }}).map((backgroundColor, variation) => {
        return [`bg-${variation}`, { backgroundColor }];
    }));

    // Gradient
    const gradient = {
        '.bg-gradient': {
            backgroundImage: theme('interface.gradient')
        }
    };

    // Whitespace
    const whitespace = {
        '.text-wrap': {
            whiteSpace: 'normal'
        },
        '.text-nowrap': {
            whiteSpace: 'nowrap'
        },
    };

    // Text Decoration
    const textDecoration = {
        '.text-decoration-none': {
            textDecoration: 'none'
        },
        
        '.text-decoration-underline': {
            textDecoration: 'underline'
        },
        
        '.text-decoration-line-trough': {
            textDecoration: 'line-trough'
        }
    };

    // Font Style
    const fontStyle = {
        '.font-italic': {
            fontStyle: 'italic'
        },

        '.font-normal': {
            fontStyle: 'normal'
        }
    };

    // Word Wrap
    const wordWrap = {
        '.text-break': {
            wordWrap: 'break-word',
            wordBreak: 'break-word',
        }
    };

    // Font Family
    const fontFamily = {
        '.font-monospace': {
            fontFamily: theme('interface.fontFamily.monospace')
        },

        '.font-sans-serif': {
            fontFamily: theme('interface.fontFamily.sansSerif')
        }
    };

    // User Select
    const userSelect = {
        '.user-select-all': {
            userSelect: 'all'
        },

        '.user-select-auto': {
            userSelect: 'auto'
        },

        '.user-select-none': {
            userSelect: 'none'
        },
    };

    // Pointer Events
    const pointerEvents = {
        '.pe-none': {
            pointerEvents: 'none'
        },

        '.pe-auto': {
            pointerEvents: 'auto'
        }
    };

    // Rounded
    const rounded = {
        '.rounded': {
            borderRadius: theme('interface.borderRadius.base'),
        },
    
        '.rounded-sm': {
            borderRadius: theme('interface.borderRadius.sm'),
        },
    
        '.rounded-lg': {
            borderRadius: theme('interface.borderRadius.lg'),
        },
    
        '.rounded-circle': {
            borderRadius: '50%'
        },
    
        '.rounded-pill': {
            borderRadius: theme('interface.rounded.pill')
        },
    
        '.rounded-top': {
            borderTopLeftRadius: theme('interface.borderRadius.base'),
            borderTopRightRadius: theme('interface.borderRadius.base'),
        },
    
        '.rounded-right': {
            borderTopRightRadius: theme('interface.borderRadius.base'),
            borderBottomRightRadius: theme('interface.borderRadius.base'),
        },
    
        '.rounded-bottom': {
            borderBottomLeftRadius: theme('interface.borderRadius.base'),
            borderBottomRightRadius: theme('interface.borderRadius.base'),
        },
    
        '.rounded-left': {
            borderTopLeftRadius: theme('interface.borderRadius.base'),
            borderBottomLeftRadius: theme('interface.borderRadius.base'),
        }
    };

    // Visibility
    const visibility = {
        '.visible': {
            visibility: 'visible'
        },

        '.invisible': {
            visibility: 'hidden'
        }
    };

    // Fade
    const fade = {
        '.fade': {
            transition: theme('interface.transition.fade'),
        },

        '.fade:not(.show)': {
            opacity: 0,
        }
    };
      
    // Collapse
    const collapse = {
        '.collapse:not(.show)': {
            display: 'none'
        },
      
        '.collapsing': {
            height: 0,
            overflow: 'hidden',
            transition: theme('interface.transition.collapse'),
        }
    };

    // Close
    const close = {
        '.close': {
            fontSize: theme('interface.close.fontSize'),
            fontWeight: theme('interface.close.fontWeight'),
            lineHeight: 1,
            color: theme('interface.close.color'),
            textShadow: theme('interface.close.textShadow'),
            opacity: .5,
        },
    
        // Override <a>'s hover style
        '.close:hover': {
            color: theme('interface.close.color'),
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
        },
    };

    addComponents({   
        ...align,
        ...float,
        ...overflow,
        ...display,
        ...shadow,
        ...position,
        ...border,
        ...borderColors,
        ...sizing,
        ...flex,
        ...margin,
        ...padding,
        ...text,
        ...textColors,
        ...lineHeight,
        ...backgroundColors,
        ...gradient,
        ...whitespace,
        ...textDecoration,
        ...fontStyle,
        ...wordWrap,
        ...fontFamily,
        ...userSelect,
        ...pointerEvents,
        ...rounded,
        ...visibility,
        ...fade,
        ...collapse,
        ...close
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
                fontFamily: {
                    sansSerif: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
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
                rounded: {
                    pill: '50rem',
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