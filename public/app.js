// Question : 1.
var ques1 = {
    question: "1.  Find the sum of 111 + 222 + 333?",
    options: {
        a: 700,
        b: 666,
        c: 999,
        d: 100
    },
    answer: "666"
}
// Question : 2.
var ques2 = {
    question: "2.  What is 999 times 100.0?",
    options: {
        a: 999.0,
        b: 999,
        c: 9990,
        d: 99900
    },
    answer: '99900'
}
// Question : 3.
var ques3 = {
    question: "3.  1010 gram = ……… kg?",
    options: {
        a: 10.10,
        b: 101.0,
        c: 100.1,
        d: 1.01
    },
    answer: '1.01'
}
// Question : 4.
var ques4 = {
    question: "4.  Simplify: {36 ÷ (-9)} ÷ {(-24) ÷ 6}?",
    options: {
        a: 1,
        b: 2,
        c: 3,
        d: -1
    },
    answer: '1'
}
// Question : 5.
var ques5 = {
    question: "5.  Evaluation of 83 × 82 × 8-5 is …………?",
    options: {
        a: 1,
        b: 0,
        c: 8,
        d: "None of these"
    },
    answer: '1'
}
// Question : 6.
var ques6 = {
    question: "6.   If David’s age is 27 years old in 2011. What was his age in 2003?",
    options: {
        a: "17 years",
        b: "37 years",
        c: "20 years",
        d: "19 years"
    },
    answer: "19 years"
}
// Question : 7.
var ques7 = {
    question: "7.  The quotient in a division sum is 403. The divisor is 100 and the remainder is 58. The dividend is ………?",
    options: {
        a: 40458,
        b: 34058,
        c: 43058,
        d: 40358
    },
    answer: '40358'
}
// Question : 8.
var ques8 = {
    question: "8.  How many digits answer we will get when we add 99 and 1?",
    options: {
        a: 1,
        b: 3,
        c: 9,
        d: 100
    },
    answer: '3'
}
// Question : 9.
var ques9 = {
    question: "9.  The number of 3-digit numbers divisible by 6, is …………?",
    options: {
        a: 149,
        b: 166,
        c: 150,
        d: 151
    },
    answer: '150'
}
// Question : 10.
var ques10 = {
    question: "10.  Which number is missing 1, 9, 25, 49, (?)",
    options: {
        a: 121,
        b: 16,
        c: 81,
        d: 169
    },
    answer: '81'
}
var Question = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10];

function showQuestion(quesIndex) {
    var displayArea = document.getElementById("display");
    var q = document.createElement('div');
    q.setAttribute('class', 'q');
    var qContent = document.createTextNode(Question[quesIndex].question);
    q.appendChild(qContent);
    displayArea.appendChild(q);              // Question Displayed

    var op = document.createElement('div');
    op.setAttribute('class', 'o');
    var b1 = document.createElement('button');
    b1.setAttribute('class', 'btn');
    op.appendChild(b1);
    var b1Content = document.createTextNode(Question[quesIndex].options.a);
    b1.appendChild(b1Content);
    var b2 = document.createElement('button');
    b2.setAttribute('class', 'btn');
    op.appendChild(b2);
    var b2Content = document.createTextNode(Question[quesIndex].options.b);
    b2.appendChild(b2Content);
    var b3 = document.createElement('button');
    b3.setAttribute('class', 'btn');
    op.appendChild(b3);
    var b3Content = document.createTextNode(Question[quesIndex].options.c);
    b3.appendChild(b3Content);
    var b4 = document.createElement('button');
    b4.setAttribute('class', 'btn');
    op.appendChild(b4);
    var b4Content = document.createTextNode(Question[quesIndex].options.d);
    b4.appendChild(b4Content);
    displayArea.appendChild(op);               // Option Displayed

    b1.setAttribute('onclick', 'count(this)');
    b2.setAttribute('onclick', 'count(this)');
    b3.setAttribute('onclick', 'count(this)');
    b4.setAttribute('onclick', 'count(this)');
}
showQuestion(0);

var score = 0;
var counter = 0;
function count(f) {
    for (var i = 0; i < Question.length; i++) {
        if (f.innerHTML === Question[i].answer) {
            score++;
        }
    }   
    counter++;
    var displayArea = document.getElementById("display");
    if (counter <= 9) {
        displayArea.innerHTML = "";
    }
    function Score() {
        var result = document.createElement('h2');
        var show = "Your Score is : " + score + " / 10";
        result.setAttribute('class', 'res');
        var resText = document.createTextNode(show);
        result.appendChild(resText);
        displayArea.appendChild(result);
    }
    if (counter <= 9) {
        showQuestion(counter);
    }
    else {
        displayArea.innerHTML = "";
        displayArea.innerHTML = `<h2>THE END</h2> `;
        Score();
    }
}