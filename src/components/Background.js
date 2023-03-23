import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { objects, cards } from "./config/config";
import { loadFull } from "tsparticles";
import { loadCardsShape } from "./test";
const Background = () => {
    const particlesInit = async (main) => {
        await loadCardsShape(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {};
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
