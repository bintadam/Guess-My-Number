let number = Math.trunc(Math.random() * 20) + 1;
let highScore = 0 ;
let score = 20;

const displayMessage = function (message){
    document.querySelector(".label-message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function(){
    guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess)

    if(!guess){
        displayMessage("⛔️ No Number!");
    } else if(guess === number){

        displayMessage("🎉 Correct Number!");
        document.querySelector(".number").textContent = number;

        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = "30rem"

        if(score > highScore){
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }

    } else if(guess !== number){
        if(score > 1){
            displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector(".score").textContent = score;
        };
    } else{
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").textContent  = 0;
    };
});


document.querySelector(".again").addEventListener("click", function(){
    score = 20
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start Guessing ....");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").textContent = "";
    document.querySelector(".score").textContent = score

    document.querySelector("body").style.backgroundColor = '#222'
    document.querySelector(".number").style.width = "15rem"

})