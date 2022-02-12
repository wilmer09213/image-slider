let leftArrow = document.getElementsByClassName("left-arrow")[0];
let rightArrow = document.getElementsByClassName("right-arrow")[0];
let catImagesSrc = ["images/cat1.png", "images/cat2.png", "images/cat3.png"]

let currentCatImage = document.getElementsByClassName("cat-image")[0];

let dots = document.getElementsByClassName("dot");
let counter = 0;
let ticker = false;

let imageCycle ;

dots[counter].classList.add("opacity-adder");


function cycle() {

    dots[counter].classList.remove("opacity-adder")

    if(counter == catImagesSrc.length-1 ) {
        counter = 0;
    } else {
        counter = counter + 1;
    }

    dots[counter].classList.add("opacity-adder");
    currentCatImage.src = catImagesSrc[counter];
}



if(ticker !== true) {

    // imageCycle;
    imageCycle = setInterval(cycle, 2000);

}



document.getElementsByClassName("container")[0].addEventListener("mouseover", function() {
    ticker = true;
    console.log(ticker)
    clearInterval(imageCycle)
});

document.getElementsByClassName("container")[0].addEventListener("mouseleave", function() {
    ticker = false;
    console.log(ticker)

    imageCycle = setInterval(cycle, 2000);
})








leftArrow.addEventListener("click", function(e) {

    dots[counter].classList.remove("opacity-adder")

    if(counter == 0 ) {
        counter = 2
    } else {
        counter = counter -1;
    }
    
    dots[counter].classList.add("opacity-adder")
    currentCatImage.src = catImagesSrc[counter];
    console.log(currentCatImage.src)
}) ;

rightArrow.addEventListener("click", function(e) {
    console.log("click right")

    dots[counter].classList.remove("opacity-adder")

    if(counter == catImagesSrc.length-1 ) {
        counter = 0;
    } else {
        counter = counter + 1;
    }

    dots[counter].classList.add("opacity-adder")
    currentCatImage.src = catImagesSrc[counter];
}) 