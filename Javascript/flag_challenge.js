var countries = ["Afghanistan", "Albania", "Algeria", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cameroon", "Canada", "Central African Republic", "Chile", "China", "Colombia", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominican Republic", "DR Congo", "East Timor", "Egypt", "El Salvador", "England", "Estonia", "Eswatini", "Ethiopia", "Finland", "France", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Liberia", "Libya", "Lithuania", "Madagascar", "Malaysia", "Maldives", "Mali", "Marshall Islands", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Morocco", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand","Nigeria", "North Korea", "North Macedonia", "Norway", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Samoa", "Saudi Arabia", "Scotland", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Saint Lucia", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Zimbabwe"];

var flags = ["../Images/Flags/afghanistan.png", "../Images/Flags/albania.png", "../Images/Flags/algeria.png", "../Images/Flags/angola.png", "../Images/Flags/antigua-and-barbuda.png",
"../Images/Flags/argentina.png", "../Images/Flags/armenia.png", "../Images/Flags/australia.png", "../Images/Flags/austria.png", "../Images/Flags/azerbaijan.png", "../Images/Flags/bahamas.png",
"../Images/Flags/bahrain.png", "../Images/Flags/bangladesh.png", "../Images/Flags/barbados.png", "../Images/Flags/belgium.png", "../Images/Flags/bolivia.png", 
"../Images/Flags/bosnia-and-herzegovina.png", "../Images/Flags/botswana.png", "../Images/Flags/brazil.png", "../Images/Flags/brunei.png", "../Images/Flags/bulgaria.png", 
"../Images/Flags/burkina-faso.png", "../Images/Flags/burundi.png", "../Images/Flags/cameroon.png", "../Images/Flags/canada.png", "../Images/Flags/central-african-republic.png", 
"../Images/Flags/chile.png", "../Images/Flags/china.png", "../Images/Flags/colombia.png", "../Images/Flags/croatia.png", "../Images/Flags/cuba.png", "../Images/Flags/cyprus.png", 
"../Images/Flags/czech-republic.png", "../Images/Flags/denmark.png", "../Images/Flags/djibouti.png", "../Images/Flags/dominican-republic.png", "../Images/Flags/dr-congo.png", 
"../Images/Flags/east-timor.png", "../Images/Flags/egypt.png", "../Images/Flags/el-salvador.png", "../Images/Flags/england.png", "../Images/Flags/estonia.png", "../Images/Flags/eswatini.png", "../Images/Flags/ethiopia.png", "../Images/Flags/finland.png", "../Images/Flags/france.png", "../Images/Flags/gambia.png", "../Images/Flags/georgia.png", "../Images/Flags/germany.png", 
"../Images/Flags/ghana.png", "../Images/Flags/greece.png", "../Images/Flags/greenland.png", "../Images/Flags/grenada.png", "../Images/Flags/haiti.png", "../Images/Flags/honduras.png", 
"../Images/Flags/hong-kong.png", "../Images/Flags/hungary.png", "../Images/Flags/iceland.png", "../Images/Flags/india.png", "../Images/Flags/indonesia.png", "../Images/Flags/iran.png", 
"../Images/Flags/iraq.png", "../Images/Flags/ireland.png", "../Images/Flags/israel.png", "../Images/Flags/italy.png", "../Images/Flags/jamaica.png", "../Images/Flags/japan.png", 
"../Images/Flags/jordan.png", "../Images/Flags/kazakhstan.png", "../Images/Flags/kenya.png", "../Images/Flags/kosovo.png", "../Images/Flags/kuwait.png", "../Images/Flags/kyrgyzstan.png", 
"../Images/Flags/laos.png", "../Images/Flags/latvia.png", "../Images/Flags/liberia.png", "../Images/Flags/libya.png", "../Images/Flags/lithuania.png", "../Images/Flags/madagascar.png", 
"../Images/Flags/malaysia.png", "../Images/Flags/maldives.png", "../Images/Flags/mali.png", "../Images/Flags/marshall-islands.png", "../Images/Flags/mauritius.png", 
"../Images/Flags/mexico.png", "../Images/Flags/moldova.png", "../Images/Flags/monaco.png", "../Images/Flags/mongolia.png", "../Images/Flags/morocco.png", "../Images/Flags/myanmar.png", 
"../Images/Flags/namibia.png", "../Images/Flags/nepal.png", "../Images/Flags/netherlands.png", "../Images/Flags/new-zealand.png", "../Images/Flags/nigeria.png",
"../Images/Flags/north-korea.png", "../Images/Flags/north-macedonia.png", "../Images/Flags/norway.png", "../Images/Flags/pakistan.png", "../Images/Flags/panama.png", 
"../Images/Flags/papua-new-guinea.png", "../Images/Flags/paraguay.png", "../Images/Flags/peru.png", "../Images/Flags/philippines.png", "../Images/Flags/poland.png", 
"../Images/Flags/portugal.png", "../Images/Flags/puerto-rico.png", "../Images/Flags/qatar.png", "../Images/Flags/romania.png", "../Images/Flags/russia.png", "../Images/Flags/rwanda.png", 
"../Images/Flags/saint-kitts-and-nevis.png", "../Images/Flags/samoa.png", "../Images/Flags/saudi-arabia.png", "../Images/Flags/scotland.png", "../Images/Flags/senegal.png", 
"../Images/Flags/serbia.png", "../Images/Flags/seychelles.png", "../Images/Flags/sierra-leone.png", "../Images/Flags/singapore.png", "../Images/Flags/slovakia.png", 
"../Images/Flags/slovenia.png", "../Images/Flags/solomon-islands.png", "../Images/Flags/somalia.png", "../Images/Flags/south-africa.png", "../Images/Flags/south-korea.png", 
"../Images/Flags/south-sudan.png", "../Images/Flags/spain.png", "../Images/Flags/sri-lanka.png", "../Images/Flags/st-lucia.png", "../Images/Flags/sudan.png", "../Images/Flags/suriname.png", "../Images/Flags/sweden.png", "../Images/Flags/switzerland.png", "../Images/Flags/syria.png", "../Images/Flags/taiwan.png", "../Images/Flags/tanzania.png", "../Images/Flags/thailand.png", 
"../Images/Flags/togo.png", "../Images/Flags/trinidad-and-tobago.png", "../Images/Flags/tunisia.png", "../Images/Flags/turkey.png", "../Images/Flags/uganda.png", "../Images/Flags/ukraine.png", "../Images/Flags/united-arab-emirates.png", "../Images/Flags/united-kingdom.png", "../Images/Flags/united-states.png", "../Images/Flags/uruguay.png", "../Images/Flags/uzbekistan.png", 
"../Images/Flags/venezuela.png", "../Images/Flags/vietnam.png", "../Images/Flags/zimbabwe.png"]

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

var flag1 = document.createElement("img");
var flag2 = document.createElement("img");
var flag3 = document.createElement("img");
var flag4 = document.createElement("img");
var flag5 = document.createElement("img");
var flag6 = document.createElement("img");

var correctAnswers = 0;
var score = 0;
var tries = 0;
var multiplyNum = 152;

function renderQuestion(){
    var index1 = Math.floor(Math.random() * multiplyNum);
    var mixedFlags = [];
    let answer = flags[index1];

    question.innerHTML = "Select the correct flag - " + countries[index1];

    mixedFlags.push(flags[index1]);
    flags.splice(index1, 1);
    multiplyNum--;

    var index2 = Math.floor(Math.random() * multiplyNum);
    var copy1 = flags[index2];
    mixedFlags.push(flags[index2]);
    flags.splice(index2, 1);
    multiplyNum--;

    var index3 = Math.floor(Math.random() * multiplyNum);
    var copy2 = flags[index3];
    mixedFlags.push(flags[index3]);
    flags.splice(index3, 1);
    multiplyNum--;

    var index4 = Math.floor(Math.random() * multiplyNum);
    var copy3 = flags[index4];
    mixedFlags.push(flags[index4]);
    flags.splice(index4, 1);
    multiplyNum--;

    var index5 = Math.floor(Math.random() * multiplyNum);
    var copy4 = flags[index5];
    mixedFlags.push(flags[index5]);
    flags.splice(index5, 1);
    multiplyNum--;

    var index6 = Math.floor(Math.random() * multiplyNum);
    var copy5 = flags[index6];
    mixedFlags.push(flags[index6]);
    flags.splice(index6, 1);
    multiplyNum--;

    shuffleArray(mixedFlags);

    flag1.src = mixedFlags[0];
    flag2.src = mixedFlags[1];
    flag3.src = mixedFlags[2];
    flag4.src = mixedFlags[3];
    flag5.src = mixedFlags[4];
    flag6.src = mixedFlags[5];

    choiceA.appendChild(flag1);
    choiceB.appendChild(flag2);
    choiceC.appendChild(flag3);
    choiceD.appendChild(flag4);
    choiceE.appendChild(flag5);
    choiceF.appendChild(flag6);

    multiplyNum += 5;

    flags.splice(0, 0, copy1);
    flags.splice(0, 0, copy2);
    flags.splice(0, 0, copy3);
    flags.splice(0, 0, copy4);
    flags.splice(0, 0, copy5);
    flags.sort();

    countries.splice(index1, 1);
    return answer.split("/").slice(-1)[0];
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
    if(choiceA.getElementsByTagName("img")[0].src.split("/").slice(-1)[0] == answer){
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
    if(choiceB.getElementsByTagName("img")[0].src.split("/").slice(-1)[0] == answer){
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
    if(choiceC.getElementsByTagName("img")[0].src.split("/").slice(-1)[0] == answer){
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
    if(choiceD.getElementsByTagName("img")[0].src.split("/").slice(-1)[0] == answer){
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
    if(choiceE.getElementsByTagName("img")[0].src.split("/").slice(-1)[0] == answer){
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
    if(choiceF.getElementsByTagName("img")[0].src.split("/").slice(-1)[0] == answer){
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