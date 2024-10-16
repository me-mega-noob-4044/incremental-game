var score = 0;

var scoreDiplay = document.getElementById("score");

function genearteClickEffect(event) {
    console.log("HI :)");

    let element = document.getElementById("click-here");
    let bubble = document.createElement("span");
    bubble.classList.add("bubble");

    let rect = element.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    element.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 750);
}

document.getElementById("click-here").onclick = function (event) {
    score++;

    scoreDiplay.innerText = score;
    genearteClickEffect(event);

    this.classList.remove("clicked");

    void this.offsetWidth;

    this.classList.add("clicked");
};