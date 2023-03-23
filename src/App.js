import "./App.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import { sleep, getRandomImages, gameOver, formatTime } from "./utils.js";
import Timer from "./Timer";
import Modal from "./components/Modal";

function App() {
    const cards = getRandomImages();
    const [allCards, setAllCards] = useState(cards);
    const [flippedCard, setFlippedCard] = useState(null);
    const [startTime, setStartTime] = useState(0);
    const [run, setRun] = useState(false);
    const [endTime, setEndTime] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [scoreList, setScoreList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("scoreList") === null) {
            localStorage.setItem("scoreList", JSON.stringify([]));
        }
        console.log(localStorage.getItem("scoreList"));
        setScoreList(JSON.parse(localStorage.getItem("scoreList")));
    }, []);

    async function onFlipped(ind) {
        if (flippedCard === null) {
            setFlippedCard(ind);
            setAllCards((prev) => {
                prev[ind].flipped = true;
                prev[ind].disabled = true;
                return [...prev];
            });
        } else {
            if (allCards[ind].value === allCards[flippedCard].value) {
                setAllCards((prev) => {
                    prev[ind].flipped = true;
                    prev[ind].disabled = true;
                    prev[ind].got = true;
                    prev[flippedCard].flipped = true;
                    prev[flippedCard].disabled = true;
                    prev[flippedCard].got = true;
                    return [...prev];
                });
            } else {
                setAllCards((prev) => {
                    prev[ind].flipped = true;
                    return [...prev];
                });
                await sleep(400);
                setAllCards((prev) => {
                    prev[flippedCard].flipped = false;
                    prev[flippedCard].disabled = false;
                    prev[ind].flipped = false;
                    return [...prev];
                });
            }
            setFlippedCard(null);
        }
        if (gameOver(allCards)) {
            setRun(false);
            setEndTime(new Date());
            setShowModal(true);
        }
    }

    function start() {
        if (run || gameOver(allCards)) return;
        setRun(true);
        setStartTime(new Date());
    }

    function reset() {
        setRun(false);
        setStartTime(0);
        setEndTime(0);
        setAllCards(getRandomImages());
    }

    function closeModal(initials) {
        const list = JSON.parse(localStorage.getItem("scoreList"));
        if (initials.length === 0)
            list.push({ name: "USR", score: endTime - startTime });
        else
            list.push({
                name: initials.toLocaleUpperCase(),
                score: endTime - startTime,
            });

        list.sort((a, b) => a.score - b.score);
        localStorage.setItem("scoreList", JSON.stringify(list.slice(0, 5)));
        setScoreList(list.slice(0, 5));
        setShowModal(false);
    }

    return (
        <>
            {showModal && (
                <Modal
                    close={closeModal}
                    time={endTime - startTime}
                    reset={reset}
                />
            )}
            <div className="App">
                <div className="controls">
                    <div>
                        {run ? (
                            <Timer />
                        ) : (
                            <span>click on the cards to start</span>
                        )}
                    </div>
                    <div className="buttonDiv">
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
                <div className="container" onClick={start}>
                    {allCards.map((card, ind) => {
                        return (
                            <Card
                                back={card.value}
                                key={ind}
                                ind={ind}
                                flipped={card.flipped}
                                disabled={card.disabled}
                                onFlipped={onFlipped}
                                got={card.got}
                            />
                        );
                    })}
                </div>

                <div className="scores">
                    <h3>High Scores</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>name</th>
                                <th>time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scoreList?.length !== 0 &&
                                scoreList?.map((val, i) => {
                                    return (
                                        <tr key={"td" + i}>
                                            <th>{i + 1}</th>
                                            <td>{val.name}</td>
                                            <td>{formatTime(val.score)}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default App;
