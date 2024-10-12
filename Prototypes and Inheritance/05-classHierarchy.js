function classHierarchy() {
    class Figure {
        units;
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(value) {
            this.units = value;
        }

        unitsConvertor(number) {
            if (this.units == 'mm') {
                number *= 10;
            }
            else if (this.units == 'm') {
                number /= 100;
            }
            return number;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        radius;
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            let convertedRadius = this.unitsConvertor(this.radius);
            return Math.PI * (convertedRadius ** 2);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        width;
        height;
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let convertedWidth = this.unitsConvertor(this.width);
            let convertedHeight = this.unitsConvertor(this.height);
            return convertedWidth * convertedHeight;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    let resultObj = {
        Figure,
        Circle,
        Rectangle
    }
    return resultObj;
}

let obj = classHierarchy();
let c = new obj.Circle(5);

console.log(c.area); // 78.53981633974483

console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new obj.Rectangle(3, 4, 'mm');

console.log(r.area); // 1200


console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');

console.log(r.area); // 12