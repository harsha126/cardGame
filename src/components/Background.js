import React from "react";
import Particles from "react-tsparticles";
import { objects,cards } from "./config/config";
import { loadFull } from "tsparticles";
import { loadCardsShape } from "https://cdn.jsdelivr.net/npm/tsparticles-shape-cards/+esm";

const Background = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadCardsShape(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            Loaded={particlesLoaded}
            params={objects}
        ></Particles>
    );
};

export default Background;
