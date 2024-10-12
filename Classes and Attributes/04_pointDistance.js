class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        let oneSide = Math.abs(point1.x - point2.x);
        let otherSide = Math.abs(point1.y - point2.y);
        let result = Math.sqrt(oneSide ** 2 + otherSide ** 2);
        return result;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
