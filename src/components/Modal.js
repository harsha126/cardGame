import React, { useEffect, useState } from "react";
import { formatTime } from "../utils";

function getList() {
    if (!localStorage.getItem("scoreList")) {
        localStorage.setItem("scoreList", JSON.stringify([]));
    }
    const list = localStorage.getItem("scoreList");
    return JSON.parse(list);
}

const Modal = ({ close, time, reset }) => {
    const [heading, setHeading] = useState("")
    const [initials, setInitials] = useState("")
    function handleClose() {
        reset();
        close(initials);
    }
    useEffect(() => {
        const list = getList();
        if (list.length === 0 || list[0].score > time)
            setHeading("Congratulation you beat the high score");
        else setHeading("Wanna play again ?")
    }, [time]);

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{heading}</h2>
                <p className="modal-para">You completed the game in {formatTime(time)}</p>
                <input placeholder="enter your initials" className="initials" type="text" max={3} maxLength={3} onChange={(e) => {setInitials(e.target.value)}} value={initials.toLocaleUpperCase()}/>
                <button className="playAgain" onClick={handleClose}>play again</button>
            </div>
        </div>
    );
};

export default Modal;
