var playerSelected = document.querySelector('.p-sel');
var computerSelected = document.querySelector('.c-sel');
var coinImg = document.querySelector('#image');
var playerScore = document.querySelector('.p-score');
var computerScore = document.querySelector('.c-score');
var winner = document.querySelector('.winner');
var buttons = document.querySelectorAll('button');

var userScore = 0;
var machineScore = 0;

function displaySelections(user, computer) {
  if (user === 'heads') {
    playerSelected.style.color = 'green';
  }
  if (user === 'tails') {
    playerSelected.style.color = 'blue';
  }
  if (computer === 'heads') {
    computerSelected.style.color = 'green';
  }
  if (computer === 'tails') {
    computerSelected.style.color = 'blue';
  }
  playerSelected.innerHTML = `${user}`;
  computerSelected.innerHTML = `${computer}`;
}

function displayImageRandom(random) {
  if (random === 1) {
    coinImg.style.backgroundImage = "url('images/coin-head.png')";
  } else {
    coinImg.style.backgroundImage = "url('images/coin-tail.png')";
  }
}

function scoreCalculation(random, userPick, computerPick) {
  if (userPick === random) {
    userScore++;
  }
  if (computerPick === random) {
    machineScore++;
  }

  playerScore.textContent = userScore;
  computerScore.textContent = machineScore;

  if (userScore === 5 && machineScore === 5) {
    winner.innerHTML = `<h3>It's a Tie</h3>`;
  } else if (userScore === 5) {
    winner.innerHTML = `<h3>You Win!!!</h3>`;
  } else if (machineScore === 5) {
    winner.innerHTML = `<h3>Computer Wins!!!</h3>`;
  }
}

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const random = Math.round(Math.random());
    const computerPick = Math.round(Math.random());

    let computerSelection;

    if (computerPick === 1) {
      computerSelection = 'heads';
    } else {
      computerSelection = 'tails';
    }

    const userSelection = e.target.innerText;
    let userPick;

    if (userSelection === 'heads') {
      userPick = 1;
    } else {
      userPick = 0;
    }

    //  Spin the coin
    coinImg.classList.add('animate');

    displayImageRandom(random);

    // Display selected side
    displaySelections(userSelection, computerSelection);

    setTimeout(() => {
      scoreCalculation(random, userPick, computerPick);

      coinImg.classList.remove('animate');
    }, 3000);
  });
});
