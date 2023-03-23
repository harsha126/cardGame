function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getRandomImages() {
    const nums = [2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "J", "K", "Q"];
    const types = ["C", "S", "D", "H"];
    const comb = nums.map((num) => types.map((type) => `${num}${type}`));
    const res = comb.reduce((prev, curr) => [...prev, ...curr], []);
    const out = [];
    for (let i = 0; i < 8; i++) {
        const s = res[Math.floor(Math.random() * 52)];
        out.push(s);
        out.push(s);
    }
    const shuffled = shuffle(out);
    return shuffled.map((card, ind) => {
        const obj = {};
        obj["value"] = card;
        obj["flipped"] = false;
        obj["disabled"] = false;
        obj["ind"] = ind;
        obj["got"] = false;
        return obj;
    });;
}

export function gameOver(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].disabled) return false;
    }
    return true;
}

export function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000); // 1 minute = 60 seconds = 60,000 milliseconds
    const seconds = Math.floor((milliseconds % 60000) / 1000); // remaining seconds after subtracting minutes
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}