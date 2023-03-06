function playGame(argplayerChoice){
	clearMessages();
	let playerInput = argplayerChoice;
	function getMoveName(argMoveId){
		if(argMoveId == 1){
	  		return 'kamień';
		}else if(argMoveId == 2){
			return 'papier';
		}else if(argMoveId == 3){
			return 'nożyce';
		}
  
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
  	}

  	function displayResult(argComputerMove, argPlayerMove){
  		printMessage('Wybrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		console.log('Wywołano funkcję displayResult');
			if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
				printMessage('Remis! Spróbuj ponownie!');
			}else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
				printMessage('Gratulacje! Wygrywasz!');
			}else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
				printMessage('Przykro mi! Przegrałeś!');
			}else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
				printMessage('Remis! Spróbuj ponownie!');
			}else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
				printMessage('Gratulacje! Wygrywasz!');
			}else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
				printMessage('Przykro mi! Przegrałeś!');
			}else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
				printMessage('Remis! Spróbuj ponownie!');
			}else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
				printMessage('Przykro mi! Przegrałeś!');
			}else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
				printMessage('Gratulacje! Wygrywasz!');
			}else{
				printMessage('Chyba nie wybrałeś właściwej liczby!');
			}
  	}


	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	/*
	if(randomNumber == 1){
	computerMove = 'kamień';
	}else if(randomNumber == 2){
		computerMove = 'papier';
	}else if(randomNumber = '3'){
		computerMove = 'nożyce';
	}
	*/

	/* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	/*
	if(playerInput == '1'){
	playerMove = 'kamień';
	}else if(playerInput == '2'){
		playerMove = 'papier';
	}else if(playerInput == '3'){
		playerMove = 'nożyce';
	}
	*/
	argPlayerMove = getMoveName(playerInput);
	argComputerMove = getMoveName(randomNumber);
	displayResult(argComputerMove, argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
  });