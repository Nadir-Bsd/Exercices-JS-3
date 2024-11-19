const text = document.getElementById("text");
const divColors = document.querySelectorAll(".color")

divColors.forEach((element) => {
    element.addEventListener("click", handleDivColor);
});

function handleDivColor(event) {
    // if attributes class est "color LaCouleur"
    if(event.target.classList.contains("green")){
        text.classList.add("green");
        text.classList.remove("red");
        text.classList.remove("blue");
    };
    
    if(event.target.classList.contains("red")){
        text.classList.add("red");
        text.classList.remove("green");
        text.classList.remove("blue");
    };
    
    if(event.target.classList.contains("blue")){
        text.classList.add("blue");
        text.classList.remove("red");
        text.classList.remove("green");
    };
}

