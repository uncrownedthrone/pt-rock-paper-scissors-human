// defining querySelector shortcut variable to save time
const qs = (element) => document.querySelector(element);

// defines the initial player choices
let playerOneChoice = undefined;
let playerTwoChoice = undefined;

// comparing results
const comparePlayers = () => {
	// if player 1 and 2 tie
	if (playerOneChoice === playerTwoChoice) {
		return "It's a Tie";
	}
	// if player 1 chooses rock
	if (playerOneChoice === 'rock') {
		if ((playerTwoChoice = 'scissors')) {
			return 'Player 1 Wins';
		} else {
			return 'Player 2 Wins';
		}
	}
	// if player 1 chooses scissors
	if (playerOneChoice === 'scissors') {
		if ((playerTwoChoice = 'paper')) {
			return 'Player 1 Wins';
		} else {
			return 'Player 2 Wins';
		}
	}
	// if player 1 chooses paper
	if (playerOneChoice === 'paper') {
		if ((playerTwoChoice = 'rock')) {
			return 'Player 1 Wins';
		} else {
			return 'Player 2 Wins';
		}
	}
};

const main = () => {
	// add function to run program here
};
document.addEventListener('DOMContentLoaded', main);
