const objects = {
    autoPlay: true,
    background: {
        color: {
            value: "#fff",
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
    },
    backgroundMask: {
        composite: "destination-out",
        cover: {
            color: {
                value: "#fff",
            },
            opacity: 1,
        },
        enable: false,
    },
    defaultThemes: {},
    delay: 0,
    fullScreen: {
        enable: true,
        zIndex: -1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: false,
                mode: [],
            },
            onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
            },
            onHover: {
                enable: false,
                mode: "light",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                },
            },
            resize: {
                delay: 0.5,
                enable: true,
            },
        },
        modes: {
            attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
            },
            bounce: {
                distance: 200,
            },
            bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
                divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: [],
                },
            },
            connect: {
                distance: 80,
                links: {
                    opacity: 0.5,
                },
                radius: 60,
            },
            grab: {
                distance: 100,
                links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                },
            },
            push: {
                default: true,
                groups: [],
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: [],
                },
            },
            slow: {
                factor: 3,
                radius: 200,
            },
            trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
            },
            light: {
                area: {
                    gradient: {
                        start: {
                            value: "3b5e98",
                        },
                        stop: {
                            value: "#17163e",
                        },
                    },
                    radius: 1000,
                },
                shadow: {
                    color: {
                        value: "#17163e",
                    },
                    length: 2000,
                },
            },
        },
    },
    manualParticles: [],
    particles: {
        number: 100,
        bounce: {
            horizontal: {
                random: {
                    enable: false,
                    minimumValue: 0.1,
                },
                value: 1,
            },
            vertical: {
                random: {
                    enable: false,
                    minimumValue: 0.1,
                },
                value: 1,
            },
        },
        collisions: {
            absorb: {
                speed: 2,
            },
            bounce: {
                horizontal: {
                    random: {
                        enable: false,
                        minimumValue: 0.1,
                    },
                    value: 1,
                },
                vertical: {
                    random: {
                        enable: false,
                        minimumValue: 0.1,
                    },
                    value: 1,
                },
            },
            enable: false,
            mode: "bounce",
            overlap: {
                enable: true,
                retries: 0,
            },
        },
        color: {
            value: "#ff0000",
            animation: {
                h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 20,
                    decay: 0,
                    sync: true,
                },
                s: {
                    count: 0,
                    enable: true,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                },
                l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                },
            },
        },
        groups: {},
        move: {
            angle: {
                offset: 0,
                value: 90,
            },
            attract: {
                distance: 200,
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000,
                },
            },
            center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
            },
            path: {
                clamp: true,
                delay: {
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: 0,
                },
                enable: false,
                options: {
                    sides: 6,
                    turnSteps: 30,
                    angle: 30,
                },
            },
            outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
            },
            random: false,
            size: false,
            speed: 6,
            spin: {
                acceleration: 0,
                enable: false,
            },
            straight: false,
            trail: {
                enable: false,
                length: 10,
                fill: {
                    color: {
                        value: "#000",
                    },
                },
            },
            vibrate: false,
            warp: false,
        },
        number: {
            density: {
                enable: true,
                width: 1920,
                height: 1080,
            },
            limit: 0,
            value: 80,
        },
        opacity: {
            random: {
                enable: false,
                minimumValue: 0.1,
            },
            value: 1,
            animation: {
                count: 0,
                enable: false,
                speed: 2,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
            },
        },
        reduceDuplicates: false,
        shadow: {
            blur: 0,
            color: {
                value: "#000",
            },
            enable: false,
            offset: {
                x: 0,
                y: 0,
            },
        },
        shape: {
            options: {
                spades: {
                    particles: {
                        color: {
                            value: "#000000",
                        },
                    },
                },
                hearts: {
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                    },
                },
                diamonds: {
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                    },
                },
                clubs: {
                    particles: {
                        color: {
                            value: "#000000",
                        },
                    },
                },
            },
            type: ["spades", "hearts", "diamonds", "clubs"],
        },
        size: {
            random: {
                enable: true,
                minimumValue: 30,
            },
            value: {
                min: 30,
                max: 45,
            },
            animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
            },
        },
        stroke: {
            width: 0,
        },
        zIndex: {
            random: {
                enable: false,
                minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
        },
        life: {
            count: 0,
            delay: {
                random: {
                    enable: false,
                    minimumValue: 0,
                },
                value: 0,
                sync: false,
            },
            duration: {
                random: {
                    enable: false,
                    minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
            },
        },
        rotate: {
            random: {
                enable: true,
                minimumValue: 0,
            },
            value: 0,
            animation: {
                enable: true,
                speed: 5,
                decay: 0,
                sync: false,
            },
            direction: "clockwise",
            path: false,
        },
        destroy: {
            bounds: {},
            mode: "none",
            split: {
                count: 1,
                factor: {
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: 3,
                },
                rate: {
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: {
                        min: 4,
                        max: 9,
                    },
                },
                sizeOffset: true,
                particles: {},
            },
        },
        roll: {
            darken: {
                enable: false,
                value: 0,
            },
            enable: false,
            enlighten: {
                enable: false,
                value: 0,
            },
            mode: "vertical",
            speed: 25,
        },
        tilt: {
            random: {
                enable: true,
                minimumValue: 2,
            },
            value: 3,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
            },
            direction: "clockwise",
            enable: false,
        },
        twinkle: {
            lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
            },
            particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
            },
        },
        wobble: {
            distance: 5,
            enable: false,
            speed: {
                angle: 50,
                move: 10,
            },
        },
        orbit: {
            animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
                random: {
                    enable: false,
                    minimumValue: 0,
                },
                value: 45,
            },
            width: 1,
        },
        links: {
            blink: false,
            color: {
                value: "#fff",
            },
            consent: false,
            distance: 100,
            enable: false,
            frequency: 1,
            opacity: 1,
            shadow: {
                blur: 5,
                color: {
                    value: "#000",
                },
                enable: false,
            },
            triangles: {
                enable: false,
                frequency: 1,
            },
            width: 1,
            warp: false,
        },
        repulse: {
            random: {
                enable: false,
                minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: [],
};

const cards = {
    fullScreen: {
        enable: true,
        zIndex: -1,
    },
    particles: {
        number: {
            value: 200,
        },
        reduceDuplicates: true,
        rotate: {
            animation: {
                enable: true,
                speed: { min: 10, max: 20 },
            },
        },
        tilt: {
            enable: true,
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: { min: 10, max: 20 },
            },
        },
        roll: {
            darken: {
                enable: true,
                value: 25,
            },
            enlighten: {
                enable: true,
                value: 25,
            },
            enable: true,
            speed: {
                min: 15,
                max: 25,
            },
        },
        wobble: {
            distance: 30,
            enable: true,
            speed: {
                min: -15,
                max: 15,
            },
        },
        shape: {
            type: ["spades", "hearts", "diamonds", "clubs"],
            options: {
                spades: {
                    particles: {
                        color: {
                            value: "#000000",
                        },
                    },
                },
                hearts: {
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                    },
                },
                diamonds: {
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                    },
                },
                clubs: {
                    particles: {
                        color: {
                            value: "#000000",
                        },
                    },
                },
            },
        },
        opacity: {
            value: 1,
        },
        size: {
            value: 30,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
        },
    },
    background: {
        color: "#fff",
    },
};

export { objects,cards };
