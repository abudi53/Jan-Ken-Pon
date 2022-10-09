function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1
    if (random === 1) {
        console.log("Computer played jan!");
        return "jan";
    }else if (random === 2) {
        console.log("Computer played ken!");
        return "ken";
    }else if (random === 3) {
        console.log("Computer played pon!");
        return "pon";
    }
}

function getUserChoice() {
    return prompt("Enter jan, ken or pon").toLowerCase();
}

function round(user, com) {
    // console.log(user);
    // console.log(com);
    if (user === "jan" && com === "jan") {
        console.log("It's a draw!"); 
        return round(getUserChoice(), getComputerChoice())
    }else if (user === "ken" && com === "ken") {
        console.log("It's a draw!");
        return round(getUserChoice(), getComputerChoice())
    }else if (user === "pon" && com === "pon") {
        console.log("It's a draw!");
        return round(getUserChoice(), getComputerChoice())
    }else if (user === "jan" && com === "ken") {
        console.log("You lose!");
        return 0
    }else if (user === "ken" && com === "pon") {
        console.log("You lose!");
        return 0
    }else if (user === "pon" && com === "jan") {
        console.log("You lose!");
        return 0
    }else if (user === "jan" && com === "pon") {
        console.log("You win!");
        return 1
    }else if (user === "pon" && com === "ken") {
        console.log("You win!");
        return 1
    }else if (user === "ken" && com === "jan") {
        console.log("You win!");
        return 1
    }
}

function game() {
    let points = 0
    console.log("This is for 3 rounds, play!");
    
    for (let index = 0; index < 3; index++) {
        if (round(getUserChoice(), getComputerChoice()) === 1) {
            points += 1;
        }
    }
    if (points > 1) {
        console.log("Wow! you won the game!");
        return 1;
    }else{
        console.log("You lost");
        return 0;
    }
}

// let comChoice = getComputerChoice();
// let userChoice = getUserChoice();

game();


