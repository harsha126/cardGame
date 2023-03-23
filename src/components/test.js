function e(e, s, x) {
    if (x.segments.length && x.segments[0].values.length) {
        e.moveTo(x.segments[0].values[0].x * s, x.segments[0].values[0].y * s);
        for (let y = 0; y < x.segments.length; y++) {
            const a = x.segments[y];
            e.bezierCurveTo(
                a.values[1].x * s,
                a.values[1].y * s,
                a.values[2].x * s,
                a.values[2].y * s,
                a.values[3].x * s,
                a.values[3].y * s
            );
        }
        for (let y = x.segments.length - 1; y >= 0; y--) {
            const a = x.segments[y];
            e.bezierCurveTo(
                -a.values[2].x * s,
                a.values[2].y * s,
                -a.values[1].x * s,
                a.values[1].y * s,
                -a.values[0].x * s,
                a.values[0].y * s
            );
        }
    }
}
const s = 0.5,
    x = {
        heart: {
            segments: [
                {
                    values: [
                        { x: 0, y: s },
                        { x: 0, y: s },
                        { x: s, y: 0 },
                        { x: s, y: -s / 2 },
                    ],
                },
                {
                    values: [
                        { x: s, y: -s / 2 },
                        { x: s, y: -s / 2 },
                        { x: s, y: -s },
                        { x: s / 2, y: -s },
                    ],
                },
                {
                    values: [
                        { x: s / 2, y: -s },
                        { x: s / 2, y: -s },
                        { x: 0, y: -s },
                        { x: 0, y: -s / 2 },
                    ],
                },
            ],
        },
        diamond: {
            segments: [
                {
                    values: [
                        { x: 0, y: s },
                        { x: 0, y: s },
                        { x: 0.375, y: 0 },
                        { x: 0.375, y: 0 },
                    ],
                },
                {
                    values: [
                        { x: 0.375, y: 0 },
                        { x: 0.375, y: 0 },
                        { x: 0, y: -s },
                        { x: 0, y: -s },
                    ],
                },
            ],
        },
        club: {
            segments: [
                {
                    values: [
                        { x: 0, y: -s },
                        { x: 0, y: -s },
                        { x: s / 2, y: -s },
                        { x: s / 2, y: -s / 2 },
                    ],
                },
                {
                    values: [
                        { x: s / 2, y: -s / 2 },
                        { x: s / 2, y: -s / 2 },
                        { x: s, y: -s / 2 },
                        { x: s, y: 0 },
                    ],
                },
                {
                    values: [
                        { x: s, y: 0 },
                        { x: s, y: 0 },
                        { x: s, y: s / 2 },
                        { x: s / 2, y: s / 2 },
                    ],
                },
                {
                    values: [
                        { x: s / 2, y: s / 2 },
                        { x: s / 2, y: s / 2 },
                        { x: s / 8, y: s / 2 },
                        { x: s / 8, y: s / 8 },
                    ],
                },
                {
                    values: [
                        { x: s / 8, y: s / 8 },
                        { x: s / 8, y: s / 2 },
                        { x: s / 2, y: s },
                        { x: s / 2, y: s },
                    ],
                },
                {
                    values: [
                        { x: s / 2, y: s },
                        { x: s / 2, y: s },
                        { x: 0, y: s },
                        { x: 0, y: s },
                    ],
                },
            ],
        },
        spade: {
            segments: [
                {
                    values: [
                        { x: 0, y: -s },
                        { x: 0, y: -s },
                        { x: s, y: -s / 2 },
                        { x: s, y: 0 },
                    ],
                },
                {
                    values: [
                        { x: s, y: 0 },
                        { x: s, y: 0 },
                        { x: s, y: s / 2 },
                        { x: s / 2, y: s / 2 },
                    ],
                },
                {
                    values: [
                        { x: s / 2, y: s / 2 },
                        { x: s / 2, y: s / 2 },
                        { x: s / 8, y: s / 2 },
                        { x: s / 8, y: s / 8 },
                    ],
                },
                {
                    values: [
                        { x: s / 8, y: s / 8 },
                        { x: s / 8, y: s / 2 },
                        { x: s / 2, y: s },
                        { x: s / 2, y: s },
                    ],
                },
                {
                    values: [
                        { x: s / 2, y: s },
                        { x: s / 2, y: s },
                        { x: 0, y: s },
                        { x: 0, y: s },
                    ],
                },
            ],
        },
    };
class y {
    draw(s, y, a) {
        e(s, a, x.spade);
    }
}
class a {
    draw(s, y, a) {
        e(s, a, x.heart);
    }
}
class l {
    draw(s, y, a) {
        e(s, a, x.diamond);
    }
}
class u {
    draw(s, y, a) {
        e(s, a, x.club);
    }
}
async function t(e) {
        await e.addShape(["spade", "spades"], new y())
        await e.addShape(["heart", "hearts"], new a())
        await e.addShape(["diamond", "diamonds"], new l())
        await e.addShape(["club", "clubs"], new u())
    }
export { t as loadCardsShape };
export default null;
