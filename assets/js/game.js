// var playerInfo = {
//   name: window.prompt("What is your robot's name?"),
//   health: 100,
//   attack: 10,
//   money: 10
// };

// //Enemy info
// var enemyInfo = [
//   {name: "Roborto",
//   attack: randomNumber(10,14)
//   },
//   {name: "Amy Android",
//   attack: randomNumber(10,14)
//   },
//   {name: "Robo Trumble",
//   attack: randomNumber(10,14)
//   }
// ];
//console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for (var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }

var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {

  //Asks player if they want to fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip =  window.confirm("Are you sure you'd like to quit?");
  
    //if yes (true) , leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      //subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("playerInfo.money", playerInfo.money);
      break;
    }

  }
  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
  var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
  enemy.health = Math.max(0, enemy.health - damage);
  console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
  );
  // check enemy's health
  if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");
    playerInfo.money = playerInfo.money + 20;
    break;
  } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }
  // remove player's health by subtracting the amount set in the enemy.attack variable
  var damage = randomNumber(enemy.attack - 3,enemy.attack);
  playerInfo.health = Math.max(0, playerInfo.health - damage);
  console.log(
     + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
  );
    // check player's health
  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
  }
  }
  else {
    window.alert("Please type a correct response")
  }
  }
};
var startGame = function() {
  playerInfo.reset();
  for (var i = 0; i < enemyInfo.length; i++) {
    if  (playerInfo.health > 0)
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40,60);
    fight(pickedEnemyObj);
  
  if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    if (storeConfirm) {
    shop();
    }
  }
  }
    endGame();
};

var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");
  
  if (playAgainConfirm) {
    startGame();
  }
  else{
    window.alert("Thank you for plating Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  shopOptionPrompt = parseInt(shopOptionPrompt);
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRAFE your attack, or LEAVE the store/ Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  
  switch (shopOptionPrompt) {
    case "1":
      playerInfo.refillHealth();
      break;
    
    case "2":
      playerInfo.upgradeAttack();
      break;

    case "3":
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 30,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 30;
  },
  
  refillHealth: function() {
    if(this.money >=7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

//Enemy info
var enemyInfo = [
  {name: "Roborto",
  attack: randomNumber(10,14)
  },
  {name: "Amy Android",
  attack: randomNumber(10,14)
  },
  {name: "Robo Trumble",
  attack: randomNumber(10,14)
  }
];

startGame();
//fight();