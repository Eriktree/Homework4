var questions = [
    {
        prompt: "JavaScript programs can be inserted into any part of an HTML document with the help of what <___> tag?\n(a) Script\n\ (b) Node\n (c) Style"
        answer: "a"
    };
    {
        prompt: "A ____ may be omitted in most cases when a line break exists.\n(a) Comma\n\ (b) Semicolon\n (c) Period "
        answer: "b"
    };
    {
        prompt: "To create a variable in JavaScript, use the ____ keyword\n(a) Go\n\ (b) Lets\n (c) Let"
        answer: "c"
    };
    {
        prompt: "What represents a computational error? \n(a) NaN\n\ (b) DaN\n (c) SaN"
        answer: "a"
    };
    {
        prompt: "What shows a message and waits for the user to press “OK”?\n(a) Prompt\n\ (b) Alert\n (c) Confirm"
        answer: "b"
    };
]
var score = 0;
for(var i=0; i < questions.length; i++){
    var response = window.prompt(question[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
alert("you got " + score + "/" + questions.length);