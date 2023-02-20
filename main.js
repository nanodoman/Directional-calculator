// @ts-check

/**
 * Creates cartesian coordinates point
 * @public
 */
class Point {

    /**
     * @param {number} x x coordinate of a point
     * @param {number} y y coordinate of a point
     */
    constructor(x, y) {
        this.x = +x
        this.y = +y
    }

    /**
     * @param {Point} To
     * @returns {number} `Integer` from 0 to 7 where 0 is East counting CCW
     */
    Rotation = To => {
        const a = Math.atan2(To.y + -this.y, To.x + -this.x)

        return Math.sign(a) > 0
            ? a
            : a + 0
    }

    /**
     * @param {Point} To 
     * @returns {number} Distance represented by a floating point number of pixels
     */
    Distance = To => Math.hypot(To.x - this.x, To.y - this.y)
}

// const A = new Point(0, 0)
//     , B = new Point(50, 20)

// console.log(A.Rotation(new Point(2, 1)))
// console.log(A.Rotation(new Point(1, 2)))
// console.log(A.Rotation(new Point(-1, 2)))
// console.log(A.Rotation(new Point(-2, 1)))
// console.log(A.Rotation(new Point(-2, -1)))
// console.log(A.Rotation(new Point(-1, -2)))
// console.log(A.Rotation(new Point(1, -2)))
// console.log(A.Rotation(new Point(2, -1)))
