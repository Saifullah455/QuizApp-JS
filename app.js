// Question : 1.
var ques1 = {
    question: "1.  What's Your Name?",
    options: {
        a: "SAIFULLAH BIHARI",
        b: "UZAIR BANGALI",
        c: "AMMIR PINGER",
        d: "DANIYAL NAGORI"
    },
    answer: "SAIFULLAH BIHARI"
}
// Question : 2.
var ques2 = {
    question: "2.  How Old are you?",
    options: {
        a: 22,
        b: 12,
        c: 43,
        d: 20
    },
    answer: '22'
}
// Question : 3.
var ques3 = {
    question: "3.  What's your Qualification?",
    options: {
        a: 'Matriculation',
        b: 'Intermediate',
        c: 'Graduation',
        d: 'Masters'
    },
    answer: 'Intermediate'
}

var Question = [ques1, ques2, ques3];
var counter = 0;

for (var i = 0; i < Question.length; i++) {
    if (counter === i) {
        var displayArea = document.getElementById("display");
        var q = document.createElement('div');
        q.setAttribute('class', 'q');
        var qContent = document.createTextNode(Question[i].question);
        q.appendChild(qContent);
        displayArea.appendChild(q);              // Question Displayed

        var op = document.createElement('div');
        op.setAttribute('class', 'o');
        var b1 = document.createElement('button');
        op.appendChild(b1);
        var b1Content = document.createTextNode(Question[i].options.a);
        b1.appendChild(b1Content);
        var b2 = document.createElement('button');
        op.appendChild(b2);
        var b2Content = document.createTextNode(Question[i].options.b);
        b2.appendChild(b2Content);
        var b3 = document.createElement('button');
        op.appendChild(b3);
        var b3Content = document.createTextNode(Question[i].options.c);
        b3.appendChild(b3Content);
        var b4 = document.createElement('button');
        op.appendChild(b4);
        var b4Content = document.createTextNode(Question[i].options.d);
        b4.appendChild(b4Content);
        displayArea.appendChild(op);               // Option Displayed
    
        b1.setAttribute('onClick', 'correctAns(this)');
        b2.setAttribute('onClick', 'correctAns(this)');
        b3.setAttribute('onClick', 'correctAns(this)');
        b4.setAttribute('onClick', 'correctAns(this)');
    }   
}
function correctAns(btn) {
    var count = 0;
    var check = false;
    for (var i = 0; i < Question.length; i++) {
        if (btn.innerHTML === Question[i].answer) {
            check = true;
        }
    }
    if (check === true) {
        alert('Your answer is Correct :)');
        displayArea.innerHTML = "";
        // counter++;
        count++;
    }
    else {
        alert('Wrong Answer !');
        displayArea.innerHTML = "";
        // counter++;
    }
    return count;
}
