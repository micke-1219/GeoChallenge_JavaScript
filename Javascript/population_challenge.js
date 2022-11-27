var countriesSmall = ["Austria", "Botswana", "Denmark", "Finland", "Gambia", "Honduras", "Hong Kong", "Ireland", "Israel", "Jamaica", "Laos", "Latvia", "New Zealand", "Norway", "Paraguay", "Qatar", "Singapore", "Switzerland", "United Arab Emirates", "Uruguay"];

var countriesMedium = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bolivia", "Cambodia", "Canada", "Chile", "Czech Republic", "Ghana", "Malaysia", "Nepal", "Netherlands", "Peru", "Poland", "Portugal", "Spain", "Sweden", "Uganda", "Ukraine"];

var countriesLarge = ["Brazil", "China", "Colombia", "Egypt", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico", "Nigeria", "Pakistan", "Russia", "South Korea", "Thailand", "Turkey", "United Kingdom", "United States", "Vietnam"];

var populationsSmall = ["8 900 000", "2 300 000", "5 800 000", "5 500 000", "2 300 000", "9 700 000", "7 500 000", "4 900 000", "9 100 000", "2 900 000", "7 200 000", "1 900 000", "4 900 000", "5 300 000", "7 000 000", "2 800 000", "5 700 000", "8 600 000", "9 800 000", "3 500 000"];

var populationsMedium = ["38 000 000", "43 100 000", "44 900 000", "25 400 000", "11 500 000", "16 500 000", "37 600 000", "19 000 000", "10 700 000", "30 400 000", "31 900 000", "28 600 000", "17 300 000", "32 500 000", "38 000 000", "10 300 000", "47 100 000", "10 300 000", "44 300 000", "44 400 000"];

var populationsLarge = ["211 000 000", "1 397 700 000", "50 300 000", "100 400 000", "67 100 000", "83 100 000", "1 366 400 000", "270 600 000", "60 300 000", "126 300 000", "127 600 000", "201 000 000", "216 600 000", "144 400 000", "51 700 000", "69 600 000", "83 400 000", "66 800 000", "328 200 000", "96 500 000"];

const dropContainer = document.getElementById("choices-1");
new Sortable(dropContainer, {
    animation: 350,
    ghostClass: "choice-hidden",
    forceFallback: true,
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

var question = document.getElementById("question");

var titleA = document.getElementById("population-small");
var titleB = document.getElementById("population-medium");
var titleC = document.getElementById("population-large");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var answerButton = document.getElementById("answer-button");

var correctAnswers = 0;
var score = 0;
var tries = 0;
var multiplyNum = 20;

function renderQuestion(){
    var index1 = Math.floor(Math.random() * multiplyNum);
    var index2 = Math.floor(Math.random() * multiplyNum);
    var index3 = Math.floor(Math.random() * multiplyNum);
    var mixedCountries = [];

    mixedCountries.push(countriesSmall[index1]);
    mixedCountries.push(countriesMedium[index2]);
    mixedCountries.push(countriesLarge[index3]);

    shuffleArray(mixedCountries);

    titleA.innerHTML = populationsSmall[index1];
    titleB.innerHTML = populationsMedium[index2];
    titleC.innerHTML = populationsLarge[index3]

    choiceA.innerHTML = mixedCountries[0];
    choiceB.innerHTML = mixedCountries[1];
    choiceC.innerHTML = mixedCountries[2];

    multiplyNum--;

    var countrySmall = countriesSmall[index1];
    var countryMedium = countriesMedium[index2];
    var countryLarge = countriesLarge[index3];

    countriesSmall.splice(index1, 1);
    countriesMedium.splice(index2, 1);
    countriesLarge.splice(index3, 1);
    populationsSmall.splice(index1, 1);
    populationsMedium.splice(index2, 1);
    populationsLarge.splice(index3, 1);

    return [countrySmall, countryMedium, countryLarge];
};

function checkAnswer(){
    let answer;
    
    if(document.getElementById("choices-1").children[0].innerHTML == countries[0]
    && document.getElementById("choices-1").children[1].innerHTML == countries[1]
    && document.getElementById("choices-1").children[2].innerHTML == countries[2]){
        answer = true;
    }
    else{
        answer = false;
    }
    console.log(document.getElementById("choices-1").children[0].innerHTML)
    console.log(document.getElementById("choices-1").children[1].innerHTML)
    console.log(document.getElementById("choices-1").children[2].innerHTML)
    return answer;
}

function displayScore(){
    document.getElementById("question").style.display = "none";
    document.getElementById("titles").style.display = "none";
    document.getElementById("choices-1").style.display = "none";
    document.getElementById("answer-button").style.display = "none";
    document.getElementById("correct-answers").innerHTML = "Correct answers: " + correctAnswers + "/10";
    document.getElementById("correct-answers").style.display = "block";
    document.getElementById("score").innerHTML = "Score: " + calculateScore().toLocaleString();
    document.getElementById("score").style.display = "block";
    document.getElementById("menu-button").style.display = "inline-block";
    displayComment();
};

var countries = [];
var answer;

answerButton.addEventListener("click", function() {
    answer = checkAnswer();
    tries++;
    if(answer == true){
        correctAnswer();
        correctAnswers++;
        score+=10000;
    }
    else{
        wrongAnswer();
    };
    if(tries == 10){
        stopInterval();
        window.setTimeout(displayScore, 1000);
        stopImmediatePropagation();
    };
    countries = renderQuestion()
});