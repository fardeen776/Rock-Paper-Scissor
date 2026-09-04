const optionBtns = document.querySelectorAll(".options button");
const playerMoves = document.querySelector(".player-move");
const cpuMoves = document.querySelector(".cpu-move");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const message = document.querySelector(".message");
let randomNumber = 0
const gameState = {
	playerCurrentMove: "",
	cpuCurrentMove: "",
	playerScore: 0,
	cpuScore: 0,
	message: "",
	cpuMoveSet: ["ROCK","PAPER","SCISSORS"]
};

function userInputHandler(optionBtns){
	optionBtns.forEach((btn)=>{
		btn.addEventListener("click",(event)=>{
			gameState.playerCurrentMove = event.target.innerText;
			cpuInputHandler();
			evaluateCurrentState(gameState.playerCurrentMove,gameState.cpuCurrentMove);
			outputHandler();
			console.log(gameState.playerScore);
		});
	});
}

function cpuInputHandler(){
	randomNumber = Math.floor(Math.random()*10);
	gameState.cpuCurrentMove = cpuMoveSelector(randomNumber);
	console.log(gameState.cpuCurrentMove,gameState.playerCurrentMove);
}

function cpuMoveSelector(randomNumber){
	if(randomNumber <= 0 || randomNumber <= 4){
		return "ROCK";
	}
	else if(randomNumber <=5 || randomNumber <= 7){
		return "PAPER";
	}
	else{
		return "SCISSORS";
	}
}

function evaluateCurrentState(playerMove,cpuMove){

	if(playerMove === "ROCK" && cpuMove === "PAPER"){
		gameState.message = "CPU Wins!";
		gameState.cpuScore += 1;
	}
	else if(playerMove === "ROCK" && cpuMove === "SCISSORS"){
		gameState.message = "Player Wins!";
		gameState.playerScore += 1;
	}
	else if(playerMove === "ROCK" && cpuMove === "ROCK"){
		gameState.message = "It's a tie!";
	}
	else if(playerMove === "PAPER" && cpuMove === "ROCK"){
		gameState.message = "Player Wins!";
		gameState.playerScore += 1;
	}
	else if(playerMove === "PAPER" && cpuMove === "PAPER"){
		gameState.message = "It's a tie!";
	}
	else if(playerMove === "PAPER" && cpuMove === "SCISSORS"){
		gameState.message = "CPU Wins!";
		gameState.cpuScore += 1;
	}
	else if(playerMove === "SCISSORS" && cpuMove === "SCISSORS"){
		gameState.message = "It's a tie!";
	}
	else if(playerMove === "SCISSORS" && cpuMove === "ROCK"){
		gameState.message = "CPU Wins!";
		gameState.cpuScore += 1;
	}
	else if(playerMove === "SCISSORS" && cpuMove === "PAPER"){
		gameState.message = "Player Wins!";
		gameState.playerScore += 1;
	}
	else{
		gameState.message = "ops there is an error!";
	}
}

function outputHandler(){
	playerMoves.innerText = gameState.playerCurrentMove;
	playerScore.innerText = gameState.playerScore;
	setTimeout(()=>{
		cpuMoves.innerText = gameState.cpuCurrentMove;
		cpuScore.innerText = gameState.cpuScore;
		messagehandler(gameState.message);
	},1000);
}

function messagehandler(msg){
	message.innerHTML = `<h3>${msg}</h3>`;
	message.classList.toggle("hidden");
	setTimeout(()=>{
		message.classList.toggle("hidden");
	},2000);
}

userInputHandler(optionBtns);
