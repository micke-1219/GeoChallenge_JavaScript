var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var myInterval = setInterval(setTime, 1000);

function setTime(){
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
};

function pad(val){
    var valString = val + "";
    if(valString.length < 2){
        return "0" + valString;
    }
    else{
        return valString;
    };
};

function correctAnswer(){
    document.getElementById(tries).style.backgroundImage = "linear-gradient(to bottom, #97D336, #4B8700)";
};

function wrongAnswer(){
    document.getElementById(tries).style.backgroundImage = "linear-gradient(to bottom, #FF1A1A, #B30000)";
};

function stopInterval(){
    clearInterval(myInterval);
};

function calculateScore(){
    var scoreReduction = totalSeconds * 100;
    score -= scoreReduction;
    if(score < 0){
        score = 0;
    };

    return score;
};

function displayComment(){
    document.getElementById("comment").style.display = "block";
    switch(correctAnswers){
        case 0:
            document.getElementById("comment").innerHTML = "You suck!";
            break;
        case 1:
            document.getElementById("comment").innerHTML = "Terrible!";
            break;
        case 2:
            document.getElementById("comment").innerHTML = "Terrible!";
            break;
        case 3:
            document.getElementById("comment").innerHTML = "Not very good...";
            break;
        case 4:
            document.getElementById("comment").innerHTML = "Not very good...";
            break;
        case 5:
            document.getElementById("comment").innerHTML = "Ok, but you can do better.";
            break;
        case 6:
            document.getElementById("comment").innerHTML = "Pretty good!";
            break;
        case 7:
            document.getElementById("comment").innerHTML = "Pretty good!";
            break;
        case 8:
            document.getElementById("comment").innerHTML = "Very impressive!";
            break;
        case 9:
            document.getElementById("comment").innerHTML = "Very impressive!";
            break;
        case 10:
            document.getElementById("comment").innerHTML = "Amazing, you are a true master of geography!";
            break;
    }
};