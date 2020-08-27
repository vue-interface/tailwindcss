const { parse } = require('units-css');

class Unit {
    constructor(str, prop) {
        const { value, unit } = parse(str, 'width');
        
        this.value = value;
        this.unit = unit;
    }

    toString() {
        return `${this.value}${this.unit}`;
    }
}

class Breakpoint {
    constructor(breakpoint) {
        if(typeof breakpoint === 'string') {
            this.min = new Unit(breakpoint);
            this.max = null;
        }
        else {
            this.min = breakpoint.min ? new Unit(breakpoint.min) : null;
            this.max = breakpoint.max ? new Unit(breakpoint.max) : null;
        }
    }
}

class Breakpoints {
    constructor(breakpoints) {
        this.breakpoints = Object.entries(breakpoints).map(([key, value]) => {
            if(Array.isArray(value)) {
                return [key, value.map(value => {
                    return new Breakpoint(value);
                })];
            }
            else {
                return [key, new Breakpoint(value)];
            }
        });
    }

    min() {
        return this.breakpoints.reduce((carry, breakpoint) => {
            if(!carry || breakpoint.min === null) {
                return breakpoint;
            }

            return carry.min < breakpoint.min ? carry : breakpoint;
        });
    }

    max() {
        return this.breakpoints.reduce((carry, breakpoint) => {
            if(!carry) {
                return breakpoint;
            }

            return carry.max > breakpoint.max ? carry : breakpoint;
        });
    }
}

module.exports = function(...args) {
    return new Breakpoints(...args);
}