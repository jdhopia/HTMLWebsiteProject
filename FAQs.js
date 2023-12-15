
function toggleHide (id, num) {
    var element = document.getElementById(id);
    var status = element.style.visibility;
    var icon = document.getElementsByClassName("icon")[num];
    var questionBox = document.getElementsByClassName("questionBox")[num];

    if (status != "visible") {
        element.style.visibility = "visible";
        icon.innerText = "-";
        element.style.height = "90px";
        questionBox.style.borderRadius = "30px 30px 0px 0px";
    } else {
        element.style.visibility = "hidden";
        icon.innerText = "+";
        element.style.height = "0px";
        questionBox.style.borderRadius = "30px 30px 30px 30px";
    }
}


/*
var questions = document.getElementsByClassName("answer");
console.log(questions)
// Add event listeners
function createListener () {
    console.log(questions[0].innerText)
    /*for (var i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", toggle(1));
        console.log(i)
} 
    //questions[0].addEventListener("click", alert("hello"))
}

    // Toggle visibility
function toggle (i) {
    console.log("this is happening")
    if (questions[i].style.visibility == "hidden") {
        questions[i].style.visibility = "visible";
        document.getElementsByClassName("icon")[i].innerText = '-'
        questions[i].style.height = "90px";
    } else {
        questions[i].style.visibility = "hidden";
        document.getElementsByClassName("icon")[i].innerText = '+'
        questions[i].style.height = "0px";
    }
}

*/
