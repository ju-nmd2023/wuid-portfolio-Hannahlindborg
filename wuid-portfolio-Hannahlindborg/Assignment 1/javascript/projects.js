function expand(){
    this.style.transform = "scale(2)"; 
    this.style.border = "white 5px solid";
}

function close(){
    this.style.transform = "scale(1)";
    this.style.border = "white 0px solid";
}

const imageElements = document.getElementsByClassName("i");

for (let i = 0; i < imageElements.length; i++) {
    const currentElement = imageElements[i];

    currentElement.style.transition = "border 0.25s ease";

    currentElement.addEventListener ("mouseover", expand);
    currentElement.addEventListener ("mouseout", close);
}

/*Chat GPT was used to find information about looping elements and applying the function to more than one element*/