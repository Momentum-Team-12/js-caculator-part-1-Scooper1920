console.log("Wassup")


function play() {
    var audio = new Audio(".github/starter_files/ANMLCat_Little meow of a cat 7 (ID 1477)_BSB.mp3");
    audio.play()
    console.log("played dat kitty")
}

const numButtons = document.querySelectorAll(".button");
console.log("All the buttons in the land", numButtons);

const display = document.getElementById("display");
console.log("The grand div of display", display)

for (let button of numButtons) {
    button.addEventListener("click",(Event) => {

        if(Event.target.id !== "eval") {
            display.innerText += Event.target.id;
            console.log("The event object is", Event.target.id);
        }
        if (Event.target.id === "clear") {
            display.innerText = ""
            console.log("All cleared up!")
        }

        if (Event.target.id === "eval") {
            let result = eval(display.innerText)
            display.innerText = result
            console.log("result")
            console.log("Eval Clicked! Oh Yeeaaah Baybay!")
        }
    });
    
}
