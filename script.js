const fill = document.querySelector(".fill");
const emptes = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
    setTimeout(() => {
        fill.className = " hold";
        fill.className = "invisible";

    }, 0);
}

function dragEnd() {
    fill.className = " fill";

}

for (const empty of emptes) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);

}

function dragOver(a) {
    a.preventDefault()
}

function dragEnter() {
    this.className += " hovered";
}

function dragLeave() {
    this.className = "empty";
}

function dragDrop() {
    this.className = "empty";
    this.appendChild(fill);
}