var capitals = ["Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Algiers", "Amsterdam", "Ankara", "Asmara", "Asunción", "Athens", "Baghdad", "Baku", "Bangkok", "Banjul", "Beijing", "Beirut", "Belgrade", "Berlin", "Bern", "Bogotá", "Brasília", "Bratislava", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Cairo", "Canberra", "Caracas", "Copenhagen", "Dakar", "Damascus", "Dhaka", "Dodoma", "Doha", "Dublin", "Edinburgh", "Freetown", "Hanoi", "Havana", "Helsinki", "Islamabad", "Jakarta", "Jerusalem", "Kabul", "Kampala", "Kathmandu", "Kiev", "Kingston", "Kinshasa", "Kuala Lumpur", "Lima", "Lisbon", "London", "Luanda", "Madrid", "Manila", "Maputo", "Mexico City", "Minsk", "Mogadishu", "Montevideo", "Moscow", "Muscat", "Nairobi", "Nassau", "Naypyidaw", "New Delhi", "Oslo", "Ottawa", "Paris", "Phnom Penh", "Prague", "Pyongyang", "Quito", "Rabat", "Reykjavík", "Riga", "Riyadh", "Rome", "San Salvador", "Santiago", "Santo Domingo","Seoul", "Sofia", "Stockholm", "Taipei", "Tallinn", "Tashkent", "Tehran", "Tokyo", "Tunis", "Ulaanbaatar", "Vienna", "Vientiane", "Warsaw", "Washington", "Wellington", "Yaoundé", "Zagreb"];

var countries = ["United Arab Emirates", "Nigeria", "Ghana", "Ethiopia", "Algeria", "Netherlands", "Turkey", "Eritrea", "Paraguay", "Greece", "Iraq", "Azerbaijan", "Thailand", "Gambia", "China", "Lebanon", "Serbia", "Germany", "Switzerland", "Colombia", "Brazil", "Slovakia", "Belgium", "Romania", "Hungary", "Argentina", "Egypt", "Australia", "Venezuela", "Denmark", "Senegal", "Syria", "Bangladesh", "Tanzania", "Qatar", "Ireland", "Scotland", "Sierra Leone", "Vietnam", "Cuba", "Finland", "Pakistan", "Indonesia", "Israel", "Afghanistan", "Uganda", "Nepal", "Ukraine", "Jamaica", "DR Congo", "Malaysia", "Peru", "Portugal", "England", "Angola", "Spain", "Philippines", "Mozambique", "Mexico", "Belarus", "Somalia", "Uruguay", "Russia", "Oman", "Kenya", "Bahamas", "Myanmar", "India", "Norway", "Canada", "France", "Cambodia", "Czech Republic", "North Korea", "Ecuador", "Morocco", "Iceland", "Latvia", "Saudi Arabia", "Italy", "El Salvador", "Chile", "Dominican Republic", "South Korea", "Bulgaria", "Sweden", "Taiwan", "Estonia", "Uzbekistan", "Iran", "Japan", "Tunisia", "Mongolia", "Austria", "Laos", "Poland", "United States", "New Zealand", "Cameroon", "Croatia"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

var question = document.getElementById("question");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choiceE = document.getElementById("E");
var choiceF = document.getElementById("F");

var correctAnswers = 0;
var score = 0;
var tries = 0;
var multiplyNum = 100;

function renderQuestion(){
    var index1 = Math.floor(Math.random() * multiplyNum);
    var mixedCapitals = [];
    let answer = capitals[index1]; 

    question.innerHTML = "What is the capital of " + countries[index1] + "?";

    mixedCapitals.push(capitals[index1]);
    capitals.splice(index1, 1);
    multiplyNum--;

    var index2 = Math.floor(Math.random() * multiplyNum);
    var copy1 = capitals[index2];
    mixedCapitals.push(capitals[index2]);
    capitals.splice(index2, 1);
    multiplyNum--;

    var index3 = Math.floor(Math.random() * multiplyNum);
    var copy2 = capitals[index3];
    mixedCapitals.push(capitals[index3]);
    capitals.splice(index3, 1);
    multiplyNum--;

    var index4 = Math.floor(Math.random() * multiplyNum);
    var copy3 = capitals[index4];
    mixedCapitals.push(capitals[index4]);
    capitals.splice(index4, 1);
    multiplyNum--;

    var index5 = Math.floor(Math.random() * multiplyNum);
    var copy4 = capitals[index5];
    mixedCapitals.push(capitals[index5]);
    capitals.splice(index5, 1);
    multiplyNum--;

    var index6 = Math.floor(Math.random() * multiplyNum);
    var copy5 = capitals[index6];
    mixedCapitals.push(capitals[index6]);
    capitals.splice(index6, 1);
    multiplyNum--;

    shuffleArray(mixedCapitals);

    choiceA.innerHTML = mixedCapitals[0];
    choiceB.innerHTML = mixedCapitals[1];
    choiceC.innerHTML = mixedCapitals[2];
    choiceD.innerHTML = mixedCapitals[3];
    choiceE.innerHTML = mixedCapitals[4];
    choiceF.innerHTML = mixedCapitals[5];

    multiplyNum += 5;

    capitals.splice(0, 0, copy1);
    capitals.splice(0, 0, copy2);
    capitals.splice(0, 0, copy3);
    capitals.splice(0, 0, copy4);
    capitals.splice(0, 0, copy5);
    capitals.sort();

    countries.splice(index1, 1);
    return answer;
};

function displayScore(){
    document.getElementById("question").style.display = "none";
    document.getElementById("choices-1").style.display = "none";
    document.getElementById("choices-2").style.display = "none";
    document.getElementById("correct-answers").innerHTML = "Correct answers: " + correctAnswers + "/10";
    document.getElementById("correct-answers").style.display = "block";
    document.getElementById("score").innerHTML = "Score: " + calculateScore().toLocaleString();
    document.getElementById("score").style.display = "block";
    document.getElementById("menu-button").style.display = "inline-block";
    displayComment();
};

var answer;

choiceA.addEventListener("click", function() {
    tries++;
    if(choiceA.innerHTML == answer){
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
    answer = renderQuestion();
});
choiceB.addEventListener("click", function() {
    tries++;
    if(choiceB.innerHTML == answer){
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
    answer = renderQuestion();
}); 
choiceC.addEventListener("click", function() {
    tries++;
    if(choiceC.innerHTML == answer){
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
    answer = renderQuestion();
}); 
choiceD.addEventListener("click", function() {
    tries++;
    if(choiceD.innerHTML == answer){
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
    answer = renderQuestion();
});
choiceE.addEventListener("click", function() {
    tries++;
    if(choiceE.innerHTML == answer){
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
    answer = renderQuestion();
});
choiceF.addEventListener("click", function() {
    tries++;
    if(choiceF.innerHTML == answer){
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
    answer = renderQuestion();
});