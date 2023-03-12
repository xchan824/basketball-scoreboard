let homeScoreCount = document.getElementById("home-score-count");
let guestScoreCount = document.getElementById("guest-score-count");

let homeName = document.getElementById("home-name");
let guestName = document.getElementById("guest-name");

let homeScore = 0;
let guestScore = 0;

function homeOnePoint() {
    homeScore += 1
    homeScoreCount.textContent = homeScore
    checkLeader();
}

function homeTwoPoints() {
    homeScore += 2
    homeScoreCount.textContent = homeScore
    checkLeader();
}

function homeThreePoints() {
    homeScore += 3
    homeScoreCount.textContent = homeScore
    checkLeader();
}

function guestOnePoint() {
    guestScore += 1
    guestScoreCount.textContent = guestScore
    checkLeader();
}

function guestTwoPoints() {
    guestScore += 2
    guestScoreCount.textContent = guestScore
    checkLeader();
}

function guestThreePoints() {
    guestScore += 3
    guestScoreCount.textContent = guestScore
    checkLeader();
}

function resetScoreboard() {
    homeScore = 0
    guestScore = 0
    homeScoreCount.textContent = homeScore
    guestScoreCount.textContent = guestScore
    checkLeader();
}

function checkLeader() {
    if (homeScore > guestScore) {
        homeName.style.color = "yellow";
        guestName.style.color = "#eeeeee";
    } else if (guestScore > homeScore) {
        guestName.style.color = "yellow";
        homeName.style.color = "#eeeeee";
    } else {
        homeName.style.color = "#eeeeee";
        guestName.style.color = "#eeeeee";
    }
}