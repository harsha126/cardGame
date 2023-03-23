import React, { useState, useEffect } from "react";
import blue from "./../assets/blue.jpg";
import red from "./../assets/red.jpg";

function getFront(ind) {
    const k = Math.floor(ind / 4);
    const r = ind % 4;
    const arr1 = [blue, red, blue, red];
    const arr2 = [red, blue, red, blue];
    if (k % 2 === 0) return arr1[r];
    return arr2[r];
}

const Card = (props) => {
    const { back, ind, flipped, disabled, onFlipped, got } = props;
    const [isFlipped, setIsFlipped] = useState(flipped);
    const front = getFront(ind);
    useEffect(() => {
        setIsFlipped(flipped);
    }, [flipped]);

    const handleFlipClick = () => {
        if (disabled) return;
        setIsFlipped((isFlipped) => !isFlipped);
        onFlipped(ind);
    };
    return (
        <div
            className={`flip-card ${isFlipped ? "tog" : ""}`}
            onClick={handleFlipClick}
        >
            <div className={`flip-card-inner`}>
                <div className="flip-card-front">
                    <img src={front} alt="front" />
                </div>
                <div className={`flip-card-back ${got ? "blur" : ""}`}>
                    <img
                        src={`http://deckofcardsapi.com/static/img/${back}.png`}
                        alt={back}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
