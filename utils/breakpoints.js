const { parse } = require('units-css');

module.exports = function(...args) {
    return new Breakpoints(...args);
};

class Unit {
    constructor(str) {
        const { value, unit } = parse(str || 0, 'width');
        
        this.value = value;
        this.unit = unit;
    }

    toString() {
        return `${this.value}${this.unit}`;
    }
}

class Breakpoint {
    constructor(breakpoint) {
        this.values = {};

        if(breakpoint && typeof breakpoint === 'object') {
            this.values.min = breakpoint.min ? new Unit(breakpoint.min) : null;
            this.values.max = breakpoint.max ? new Unit(breakpoint.max) : null;
        }
        else {
            this.values.min = new Unit(breakpoint);
            this.values.max = null;
        }
    }

    min() {
        if(this.values.min) {
            return this.values.min;
        }

        return this.values.max ? this.values.max : null;
    }

    max() {
        if(this.values.max) {
            return this.values.max;
        }

        return this.values.min ? this.values.min : null;
    }
}

class Breakpoints {
    constructor(breakpoints) {
        const entries = Object.entries(breakpoints).map(([key, value]) => {
            if(Array.isArray(value)) {
                return [key, value.map(value => {
                    return new Breakpoint(value);
                })];
            }
            else {
                return [key, new Breakpoint(value)];
            }
        });

        this.breakpoints = Object.fromEntries(entries);
    }

    entries() {
        return Object.entries(this.breakpoints);
    }

    min() {
        return this.sortMax()[0];
    }

    max() {
        return this.sortMax()[0];
    }    

    next(name) {
        return this.index(name, this.sortMin());
    }

    prev(name) {
        return this.index(name, this.sortMax());
    }

    index(name, entries) {
        entries = entries || this.entries();

        const index = entries.indexOf(entries.find(([ key ]) => {
            return key === name;
        }));

        return entries[index + 1];
    }

    sortMin() {
        return this.entries().sort(([x, a], [y, b]) => {
            return Math.max(a.min().value, a.max().value) > Math.max(b.min().value, b.max().value) ? 1 : -1;
        });
    }

    sortMax() {
        return this.entries().sort(([x, a], [y, b]) => {
            return Math.min(a.min().value, a.max().value) > Math.max(b.min().value, b.max().value) ? 1 : -1;
        });
    }

    infix(subject, name) {
        const [ key ] = this.min();

        return `${subject || ''}${name === key ? '' : (name ? `-${name}` : '')}`;
    }
}