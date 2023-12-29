window.addEventListener('load', function () {
    const paper = document.getElementById("paper");
    const rock = document.getElementById("rock");
    const scissors = document.getElementById("scissors");
    const user = document.querySelector(".user-choice");
    const comp = document.querySelector(".comp-choice");
    const selection = [rock, paper, scissors]
  
    function clickHandler(button) {
    const contents = document.createElement("p");
    contents.classList.add('contents');
    contents.textContent = button.innerHTML;
    contents.style.fontSize = "100px";
    user.appendChild(contents);
    const comp_contents = selection[Math.floor(Math.random() * 3)];
    }
    paper.addEventListener('click', function () {
        clickHandler(this);
    });
    rock.addEventListener('click', function () {
        clickHandler(this);
    });
    scissors.addEventListener('click', function () {
        clickHandler(this);
    });
});
