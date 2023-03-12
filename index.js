let homeScoreCount = document.getElementById("home-score-count");
let awayScoreCount = document.getElementById("away-score-count");

let homeName = document.getElementById("home-name");
let awayName = document.getElementById("away-name");

let homeScore = 0;
let awayScore = 0;

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

function awayOnePoint() {
    awayScore += 1
    awayScoreCount.textContent = awayScore
    checkLeader();
}

function awayTwoPoints() {
    awayScore += 2
    awayScoreCount.textContent = awayScore
    checkLeader();
}

function awayThreePoints() {
    awayScore += 3
    awayScoreCount.textContent = awayScore
    checkLeader();
}

function resetScoreboard() {
    homeScore = 0
    awayScore = 0
    homeScoreCount.textContent = homeScore
    awayScoreCount.textContent = awayScore
    checkLeader();
}

function checkLeader() {
    if (homeScore > awayScore) {
        homeName.style.color = "yellow";
        awayName.style.color = "#eeeeee";
    } else if (awayScore > homeScore) {
        awayName.style.color = "yellow";
        homeName.style.color = "#eeeeee";
    } else {
        homeName.style.color = "#eeeeee";
        awayName.style.color = "#eeeeee";
    }
}