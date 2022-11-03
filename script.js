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

function getUserChoice(e) {
    rounds += 1;
    setTimeout()
    const com = getComputerChoice()
    const user = this.id
    if (round(user, com) === 1) {
        points += 1;
    }
    if (rounds == 3 && points > 1) {
        console.log("you won the game");
    }else if (rounds == 3 && points <= 1) {
        console.log("You lost the game");
    }

}

function round(user, com) {

    if (user === "jan" && com === "jan") {
        console.log("It's a draw!"); 
        rounds -= 1;
        return 0;
    }else if (user === "ken" && com === "ken") {
        console.log("It's a draw!");
        rounds -= 1;
        return 0;
    }else if (user === "pon" && com === "pon") {
        console.log("It's a draw!");
        rounds -= 1;
        return 0;
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

let rounds = 0;
let points = 0;

const choices = Array.from(document.querySelectorAll(".choice"));

choices.forEach(choice => choice.addEventListener("click", getUserChoice));
