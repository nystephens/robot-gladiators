



// fight each enemy-robot by looping over them and fighting them one at a time
// function to start new game
// function to end the entire game


let startGame = function(){
    // reset player stats
    playerInfo.reset();

for (let i = 0; i < enemyInfo.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    let pickedEnemyObj = enemyInfo[i];

    // reset enemy.health before starting new fight
    pickedEnemyOjb.health = randomNumber(40, 60);

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemy.name parameter
    fight(pickedEnemyObj);
    // if were not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        shop();
    }
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
    }
}
// play again
endGame();
};

let endGame = function() {
    window.alert("The game has now ended. Lets see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert ("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You have lost your robot in battle.");
    }

    // ask the player if they want to play again
    let playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame;
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! come back soon!");
    }
};

// fight function (now with parameter for enemy's name)
let fight = function(enemy) {
    console.log(enemy);
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask player if they'd like to fight or run
      let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(playerInfo.money - 10);
  
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack letiable
    //   generate random damage value based on player's attack power
      let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        
        // ask if player wants to use the store before next round
        let storeConfirm = window.confirm("The fight is over, visit the store before your next fight.");

        //  if yes take them to the store() function
        if (storeConfirm) { shop(); }


        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemy.attack variable

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };

let shop = function() {
    let shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHeath();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing so that function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

let randomNumber = function(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

let playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHeath: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health +=20;
        this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
        this.attack += 6;
        this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
    };
    
    let enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        },
    ];
    
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);
// start game when page loads

startGame();
// debugger;


// wrap the game in startGame() function
//  *alerts the player of thier total stats
//  *asks player if they want to play again
//  *if yes, call startGame() function

// After a player skips or defeats an enemy 
// (and there are still more robots to fight)
//  * ask the player if they want to stop
//  * if no, continue as normal
//  * if yes, call the shop() function
// in the shop() function, ask the player if
// they want to 
//  "REFILL" Health, 
//  "UPGRADE" Attack,
// or "LEAVE" the shop
// if refill, subtract money points 
// from player and increase health
// if upgrade, subract money points 
// from player and increase attack power.
// if leave, alert goodbyre and exit the function.
// if any other invalid option, call shop() again


