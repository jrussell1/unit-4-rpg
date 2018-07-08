var player = {
    health: 100,
    power: 20
}

var opponent = {
    health: 100,
    power: 20,
}

const attack = () => {
    var attackButton = document.getElementById('attack-button');
    var restartButton = document.getElementById('restart-button');
    var gameMessage = document.getElementById('game-message');
    
    var playerAttack = determineAttack(player.power);
    opponent.health = opponent.health - playerAttack;
    printToScreen();

    if (isGameOver(opponent.health)) {
        endGame("You won the fight");
        return;
    }
    
    attackButton.disabled = true;
    gameMessage.innerText = "Opponent is about to strike!"

    setTimeout(() =>{
        var opponentAttack = determineAttack(opponent.power);
        player.health = player.health - opponentAttack;
        printToScreen();

            if (isGameOver(player.health)){
                endGame("Opponent won the fight");
                return;
            }
        attackButton.disabled = false;
    }, 250);
}

const endGame = (message) => {
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-button').hidden = true;
    document.getElementById('restart-button').hidden = false;
}
const determineAttack = (power) => {
    return Math.floor(Math.random() * power)
}

const isGameOver = (health) => {
    return health <= 0;
}

const restart = () => {
    var attackButton = document.getElementById('attack-button');
    player.health = 100;
    opponent.health = 100;
    document.getElementById('game-message').innerText = "";
    document.getElementById('attack-button').hidden = false;
    attackButton.disable = false;
    attackButton.hidden = false;
    document.getElementById('restart-button').hidden = true;
    printToScreen();
}

const printToScreen = () => {
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('player-health').innerText = player.health;
}

printToScreen();