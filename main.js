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

function inputPoint(ax, ay, bx, by) {
    document.querySelector("#pointA").x.baseVal.value = +ax + plain.clientWidth / 2
    document.querySelector("#pointA").y.baseVal.value = +ay + plain.clientWidth / 2

    document.querySelector("#pointB").x.baseVal.value = +bx + plain.clientWidth / 2
    document.querySelector("#pointB").y.baseVal.value = +by + plain.clientWidth / 2
    calculate()
}

function clickPoint(e) {
    const point = e.shiftKey ? document.querySelector("#pointB") : document.querySelector("#pointA")
    const inputX = e.shiftKey ? bx : ax
    const inputY = e.shiftKey ? by : ay
    point.x.baseVal.value = e.offsetX
    point.y.baseVal.value = e.offsetY
    inputX.value = e.offsetX - plain.clientWidth / 2
    inputY.value = e.offsetY - plain.clientHeight / 2
    calculate()
}

function calculate() {
    const A = new Point(ax.value, ay.value)
    const B = new Point(bx.value, by.value)
    rotation.value = A.Rotation(B)
    distance.value = A.Distance(B)
}
