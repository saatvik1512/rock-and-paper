// see what the player chooses either btn1 or 2 or three i.e Rock or paper or scissors
// create the variable named getPlayerChoice
// Store what the player chooses and store it in variable
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
 

// Create a function called countChecker to check whether 5 times games has been played or not
    // when user clicks, it incrrementes
    //if user has clicked it 5 times
        //delete that whole div element and replace it with followings 
        // if playerscore > compscore => player wins 
        // else if playerscore < compscore => comp wins
        // else => both tied
    //start a new game button appears
function countChecker(){
    count++;
    if (count == 6){
        //create a slogan of winning of losing with comparisions
            //create an element named slogan and append it after buttons element
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

// Create a getRandom func for getting a number between 0 and 3
    // store the random number in variable
        // return it

function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}

// Create a getComputerchoice function 
    // create a array consisting of ["Rock", "Paper", "Scissors"]
        // call the getRandom for a random and return array[getRandom()]

function getComputeChoice() {
    const allChoices = ["Rock", "Paper", "Scissors"];
    let randomValue = getRandomNumber();
    return allChoices[randomValue];
}


// Create a function called playRound(getPlayerChoice, getComputerChoice()) for 1 specific round
    // if (player has rock || paper || scissors && computer has scissors || rock || paper)
        // print 'you win ${getPlayerChoice} beats ${getComputeChoice()}' and return it
    //else if (player has rock || paper || scissors && computer has paper || scissors || rock)
        // print 'you lost ${getComputeChoice()} beats ${getPlaterChoice}' and return it
    // else if (both have same weapon)
        // print 'its a tie' and return it

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

// Create a func called overGame for all 5 rounds
// create 2 variables called playerScore and CompScore
    // start the for loop for five rounds
        // create a variable called showWinner 
        // call the playRound and store the string in showWinner
        // if string includes "win" then
            // increment playerScore
        // else if string includes "lost" then
            // increment compScore
        // else 
            // increment both
let playerScore = 0, compScore = 0;
for (let i = 0; i < 5; i++){
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
            playerScore++;
            compScore++;
            winningStatment.style.color = "black";
            getPlayer.innerHTML = playerScore;
            getComp.innerHTML = compScore;
        }
    }
}