function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        let res: MyPosition = {
            x: undefined,
            y: undefined
        }
        return res
    }

    if (a && !b) {
        let res: MyPositionWithDefault = {
            x: a,
            y: undefined,
            default: a.toString()
        }
        return res
    }
    let res: MyPosition = {x: a, y: b}
    return res
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))