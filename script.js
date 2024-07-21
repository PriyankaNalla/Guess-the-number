var guess = Math.floor((Math.random() * 100) + 1);
alert(guess);
var count=0;
function checkGuess(){
    const input=document.getElementById("input").value;
    const finalResult=document.getElementsByClassName("finalResult")[0];
    const score=document.getElementsByClassName("score")[0];
    if (input != guess) {
        if (input < guess) {
            count++;
            finalResult.style.display="block";
            finalResult.innerText = "Entered number is less than the random generated number";
        } else if (input > guess) {
            count++;
            finalResult.style.display="block";
            finalResult.innerText = "Entered number is greater than the random generated number";
        }
        // Clear the input box for the next guess
        document.getElementById("input").value = '';
    } else {
        count++;
        finalResult.style.display="block";
        finalResult.innerText = "Congratulations! You've guessed the number.";
        score.style.display="block";
        score.innerText = "Your Score is " + (100 - count);
        document.getElementById("input").value = '';
    }
}
window.onload=()=>{
    document.getElementById("input").value='';
}