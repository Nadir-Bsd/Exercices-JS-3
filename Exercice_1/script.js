const img = document.getElementById("image1");

img.addEventListener("mouseover", function handleImg() {
    img.style.border = "3px solid red";
});

img.addEventListener("mouseout" , function handleImg() {
    img.style.border = "";
});