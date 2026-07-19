const randomNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById("guessBtn").addEventListener("click", function(){

    const userGuess = parseInt(document.getElementById("guess").value);
    const feedback = document.getElementById("feedback");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        feedback.textContent = "Please enter a number between 1 and 10.";
    } else if (userGuess === randomNumber){
        feedback.textContent = "Correct ! You guessed the number!";
        feedback.style.color = "#4CAF50";
    } else{
        feedback.textContent = "Wrong guess! Try again";
        feedback.style.color = "#FF5722";
    }
        
    
});