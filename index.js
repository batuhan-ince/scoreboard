let homeScore = 0
let guestScore = 0
let homeTotalScore = document.getElementById("home-score")
let guestTotalScore = document.getElementById("guest-score")


function add1PointHome() {
    homeScore += 1
    homeTotalScore.textContent = homeScore
}

function add2PointsHome() {
    homeScore += 2
    homeTotalScore.textContent = homeScore
}

function add3PointsHome() {
    homeScore += 3
    homeTotalScore.textContent = homeScore
}


function add1PointGuest() {
    guestScore += 1
    guestTotalScore.textContent = guestScore
}

function add2PointsGuest() {
    guestScore += 2
    guestTotalScore.textContent = guestScore
}

function add3PointsGuest() {
    guestScore += 3
    guestTotalScore.textContent = guestScore
}

function newGame() {
    guestScore = 0
    homeScore = 0
    guestTotalScore.textContent = guestScore
    homeTotalScore.textContent = guestScore
}