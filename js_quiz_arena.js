function nextQuestion(){
    const arr = [
        { 
            question: "What is the capital of India?",
            options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
            answer: "New Delhi" 
        },
        {
            question:"Whose the developer of JavaScript?",
            options: ["Guido van Rossum", "Brendan Eich", "James Gosling", "Dennis Ritchie"],
            answer: "Brendan Eich"
        },
        {
            question:"What is the full form of HTML?",
            options: ["Hyper Text Markup Language", "Hyper Text Makeup Language", "Hyper Text Markup Leveler", "Hyper Text Makeup Leveler"],
            answer: "Hyper Text Markup Language"
        },
        {
            question:"What is the full form of AI?",
            options:["Artifical Intelligence", "Artificial Invention", "Artificial Integration", "Artificial Interference"],
            answer: "Artificial Intelligence"
        }
    ]

    for(let i = 0; i < arr.length; i++){
        let q = arr[i];
        document.getElementById("Question").textContent = q.question;
    }
}

function timeLeft(){
    let timer = 30;
    setInterval(() => {
        timer -= 1;
        document.getElementById("timer").textContent = timer + " seconds left";
    }, 1000);
}

function checkAnswer(){
    if(document.getElementById("options").value == arr[i].answer){
        alert("Correct!");
        colourtoGreen();
    }
    else{
        alert("Incorrect!");
        colourtoRed();
    }
}

function colourtoGreen(){
    document.getElementById("options").style.backgroundColor="green";
}

function colourtoRed(){
    document.getElementById("options").style.backgroundColor="red";
}