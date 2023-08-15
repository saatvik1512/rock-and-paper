let playerChoice, computerChoice, count = 0;
const btns = document.querySelectorAll("button");
for (const btn of btns){
    btn.addEventListener("click", (e) => {
        playerChoice = btn.innerHTML;
        computerChoice = getComputeChoice();
        overGame();
        countChecker();
    })
}

function countChecker(){
    if (playerScore == 5 || compScore == 5){
        const slogans = document.createElement("h3");
        slogans.setAttribute("class", "lastline");
        const maincontainer = document.querySelector(".hero-container");
        const reloadButton = document.createElement("button");
        reloadButton.setAttribute("class", "lastbutton");
        reloadButton.disabled = false;
        reloadButton.innerText = "New Game";
        reloadButton.addEventListener("click", (e) => {
            window.location.reload();
        })
        if (playerScore > compScore){
            slogans.style.color = "green";
            slogans.innerText = "Hurray!!, we win this game 😎";
        }
        else if (playerScore < compScore){
            slogans.innerText = "Noo!!, we lost to computer 😭";
            slogans.style.color = "red";
        }
        else {
            slogans.innerText = "The computer was lucky that we tied 😐"
            slogans.style.color= "black";
        }
        const allButtons = document.querySelectorAll(".button");
        for (const single of allButtons){
            single.disabled = true;
        }
        const removeDetails = document.querySelector(".allDetails")
        removeDetails.remove();
        maincontainer.appendChild(slogans);
        maincontainer.appendChild(reloadButton)
    }
}

function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}

function getComputeChoice() {
    const allChoices = ["Rock", "Paper", "Scissors"];
    let randomValue = getRandomNumber();
    return allChoices[randomValue];
}

function playRound (playerChoice, computerChoice){
    let showStatement;
    if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper"){
        showStatement = `You have won!! ${playerChoice} beats ${computerChoice}`;
        return showStatement;
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Rock"){
        showStatement = `You have lost!! ${computerChoice} beats ${playerChoice}`;
        return showStatement;
    }
    else if  (playerChoice == "Rock" && computerChoice == "Rock" || playerChoice == "Paper" && computerChoice == "Paper" || playerChoice == "Scissors" && computerChoice == "Scissors"){
        showStatement = `You both have tied!! ${playerChoice} ties ${computerChoice}`;
        return showStatement;
    }
}

let playerScore = 0, compScore = 0;

    function overGame(){
        const winningStatment = document.querySelector(".winning-statement");
        let getPlayer = document.querySelector(".pScore");
        let getComp = document.querySelector(".cScore");
        let showWinner = playRound(playerChoice, computerChoice);
        winningStatment.innerHTML = showWinner;
        if (showWinner.includes("won")){
            playerScore++;
            winningStatment.style.color = "green";
            getPlayer.innerHTML = playerScore;
        }
        else if (showWinner.includes("lost")){
            compScore++;
            winningStatment.style.color = "red";
            getComp.innerHTML = compScore;
        }
        else {
            winningStatment.style.color = "black";
            getPlayer.innerHTML = playerScore;
            getComp.innerHTML = compScore;
        }
    }
