function luckySevens() {
  // added parseint in order to make the input a integer and not a string
  var startingBet = parseInt(document.getElementById("startingBet").value);
  var totalRoll = 0;
  var winCounter = 0;
  var loseCounter = 0;
  var gameMoney = startingBet;
  var moneyArray = [startingBet];

if (startingBet <= 0) {
    alert("Starting bet must be greater than 0");
	document.forms["luckySevens"]["startingBet"].value = "";
    return false;
}
while (gameMoney > 0) {
    totalRoll++;

	var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var sumDice = dice1 + dice2;
	
}