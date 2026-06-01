const approvalMessages = [
    "This looks good, thanks",
    "This is approved",
    "Go ahead and proceed"
];

const rejectionMessages = [
    "Edits attached",
    "Can we discuss this over Teams?",
    "See responses to comments attached"
];

let currentMessageType;
let score = 0;
const yippee = new Audio("https://www.myinstants.com/media/sounds/yippee-tbh.mp3");
const bwop = new Audio("https://www.myinstants.com/media/sounds/spongebob-boowomp.mp3");

/**
 * @param {string[]} array 
 * @returns {string}
 */
function pickRandom (array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateMessage () {
    let newMesg = "Something borked";
    if (Math.random() > 0.25) {
        newMesg = pickRandom(approvalMessages);
        currentMessageType = "approve";
    } else {
        newMesg = pickRandom(rejectionMessages);
        currentMessageType = "reject";
    }

    document.getElementById("messageSpan").textContent = newMesg;
    document.getElementById("score").textContent = score;
}

function check (clickedOption) {
    if (clickedOption == currentMessageType) {
        yippee.currentTime = 0;
        yippee.play();
        score += 1;
        generateMessage();
    } else {
        bwop.currentTime = 0;
        bwop.play();
    }
}

document.getElementById("left").addEventListener("click", () => {check("approve")});
document.getElementById("right").addEventListener("click", () => {check("reject")});
generateMessage();