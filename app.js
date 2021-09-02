var divanswers = document.getElementById("divanswers")

var divanswe = document.getElementById("divanswe");

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