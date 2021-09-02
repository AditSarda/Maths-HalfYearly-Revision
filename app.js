var divanswers = document.getElementById("divanswers")

var divanswe = document.getElementById("divanswe");

var divanswera = document.getElementById("divanswera")

var divanswerd = document.getElementById("divanswerd")

var bank = document.getElementById("bank");

bank.onclick = () => {
    location.href = "./qbank.html"
}

// This the function for q 1

function submits() {
    if (document.getElementById('answers').checked) {
        divanswers.innerHTML = "This is the correct answer.";
    } else {
        divanswers.innerHTML = "Ops! This is the wrong answer . The correct answer is 1 as any no. raised to power 0 is 1."
    }
}

// This the function for q 2

function submit() {
    if (document.getElementById('answer').checked) {
        divanswer.innerHTML = "This is the correct answer.";
    } else {
        divanswer.innerHTML = "Ops! This is the wrong answer . The correct answer is 39 as 39 square gives us 1521"
    }

}

// This the function for q 3

function submi() {
    if (document.getElementById('answe').checked) {
        divanswe.innerHTML = "This is the correct answer.";
    } else {
        divanswe.innerHTML = "Ops! This is the wrong answer . The correct answer is 9 because 9 X 9 X 9 gives 9 in the units place. "
    }

}

// This the function for q 4

function subm() {
    if (document.getElementById('answ').checked) {
        divansw.innerHTML = "This is the correct answer.";
    } else {
        divansw.innerHTML = "Ops! This is the wrong answer . The correct answer is 380.25 "
    }

}

// This the function for q 5

function sub() {
    if (document.getElementById('ans').checked) {
        divans.innerHTML = "This is the correct answer.";
    } else {
        divans.innerHTML = "Ops! This is the wrong answer . The correct answer is 2 X 3 X a "
    }
}

// This the function for q 6 

// calculate button
// disrupted

// #technical error
// Suntax=wrong

function submita() {
    if (document.getElementById('answera').checked) {
        divanswera.innerHTML = "This is the correct answer.";
    } else {
        divanswera.innerHTML = "Ops! This is the wrong answer . The correct answer is Trinomial "
    }

}

function submitb() {
    if (document.getElementById('answerb').checked) {
        divanswerb.innerHTML = "This is the correct answer.";
    } else {
        divanswerb.innerHTML = "Ops! This is the wrong answer . The correct answer is Whole Number "
    }

}



function submitc() {
    if (document.getElementById('answerc').checked) {
        divanswerc.innerHTML = "This is the correct answer.";
    } else {
        divanswerc.innerHTML = "Ops! This is the wrong answer . The correct answer is both 3 & a are irreducible factors. "
    }

}




function submitd() {
    if (document.getElementById('answerd').checked) {
        divanswerd.innerHTML = "This is the correct answer.";
    } else {
        divanswerd.innerHTML = "Ops! This is the wrong answer . The correct answer is base X perpendicular height "
    }

}

function submite() {
    if (document.getElementById('answere').checked) {
        divanswere.innerHTML = "This is the correct answer.";
    } else {
        divanswere.innerHTML = "Ops! This is the wrong answer . The correct answer is Sum of length of three sides "
    }

}