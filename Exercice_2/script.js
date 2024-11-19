const a = document.querySelectorAll("a");
const txt = document.getElementById("leP");

a.forEach((element) => {
    element.addEventListener("click",handleClick);
})

function handleClick (event) {
    const elementTarget = event.target;
    
    // SI ELEMENT TARGET EST MASQUER (display none)
    if(elementTarget.outerText === "Masquer"){
        txt.classList.add("d-none");
        txt.classList.remove("AfficheTxt");
    }
    
    // SI ELEMENT TARGET EST AFFICHE (display border-box)
    if(elementTarget.outerText === "Afficher"){
        txt.classList.remove("d-none");
        txt.classList.add("AfficheTxt");
    }
};