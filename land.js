var lands = ["Mecklenburg-Vorpommern", "Nordrhein-Westfalen", "Baden-Württemberg", "Hessen", "Bremen", "Niedersachsen", "Thüringen",
             "Hamburg", "Schleswig Holstein", "Rheinland-Pfalz", "Saarland", "Bayern", "Berlin","Sachsen-Anhalt", "Sachsen", "Brandenburg"];
var land = "";
var aimed = new Audio("audio/aim.wav");
var missed = new Audio("audio/miss.wav");
var win = new Audio("audio/win.wav");
var lost = new Audio("audio/lost.mp3");

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

var random = shuffle(numbers);
var correct = 0;
var counter = 0;

function start() {

    land = lands[numbers[counter]];

    if (counter < 16){
        document.getElementsByClassName("password")[0].innerHTML= "<p><span class='landclass'>Wskaż na mapie land o nazwie:</span> <br><br><br><center><span class='landclass'>" + land + "</span></center></p>";
    } else {
        document.getElementsByClassName("password")[0].innerHTML= "<p><span class='landclass'>Koniec Gry<br><br>Poprawnych odpowiedzi:</span> <br><br><center><span class='landclass'>" + correct + "</span></center></p><br/><span class= 'reset' onclick = location.reload()> Spróbuj jeszcze raz? </span>";
        if(correct < 10)
        lost.play();
        if(correct == 16)
        win.play();
    }
    
}

window.onload = start;


function check_land(no) {

    var hit = false;
    
    if (no == numbers[counter]) {
        hit = true;
    }

    if (hit == true)
    {
        aimed.play();
        document.getElementById(no).style.fill = "#003300";
        document.getElementById(no).style.stroke = "#00C300";
        correct++;
    }  else {
        missed.play();
        document.getElementById(no).style.fill = "#330000";
        document.getElementById(no).style.stroke = "#C00000";
    } 
    counter++;
    
    start();
}


