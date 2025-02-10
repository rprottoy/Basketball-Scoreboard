let homeScore = 0;
let guestScore = 0;

function addPoint(team, points) {
    if (team === "home") {
        homeScore += points;
    } else {
        guestScore += points;
    }
    updateScore(team);
}

function updateScore(team) {
    if (team === "home") {
        document.getElementById("home-box").textContent = homeScore;
    } else {
        document.getElementById("guest-box").textContent = guestScore;
    }
}
