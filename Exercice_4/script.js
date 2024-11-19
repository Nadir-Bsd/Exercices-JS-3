// select
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

 
// events
inputs.forEach((element) => {
    element.addEventListener("keyup", handleWirte);
});

button.addEventListener("click", handleClick);


// functions
function handleClick(event) {

    inputs.forEach((element) => {
        
        if(inputs[0].value == inputs[1].value){
            element.classList.add("border-green");
            element.classList.remove("border-red");
        }else{
            element.classList.remove("border-green");
            element.classList.add("border-red");
        };
    });
};



function handleWirte(event) {
    inputs.forEach((element) => {
        
        if(inputs[0].value == inputs[1].value){
            element.classList.add("border-green");
            element.classList.remove("border-red");
        }else{
            element.classList.add("border-red");
            element.classList.remove("border-green");
        };
    });
};
