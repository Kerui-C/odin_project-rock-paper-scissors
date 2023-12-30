window.addEventListener('load', function () {
    const paper = document.getElementById("paper");
    const rock = document.getElementById("rock");
    const scissors = document.getElementById("scissors");
    const user = document.querySelector(".user-choice");
    const comp = document.querySelector(".comp-choice");
    const selection = [rock, paper, scissors];
    const pscore = { contents: "0" };
    const cscore = { contents: "0" };
  
    //function handleResults(){}

    function clickHandler(button) {
    user.innerHTML = '';
    const contents = document.createElement("p");
    contents.classList.add('contents');
    contents.textContent = button.innerHTML;
    contents.style.fontSize = "100px";
    contents.style.margin = "0";
    user.appendChild(contents);
    comp.innerHTML = '';
    const comp_contents_container = document.createElement("p")
    const choice = selection[Math.floor(Math.random() * 3)]
    comp_contents_container.textContent = choice.innerHTML;
    comp_contents_container.style.fontSize = "100px";
    comp_contents_container.style.margin = "0";
    comp.appendChild(comp_contents_container);
    switch(contents.textContent+comp_contents_container.textContent){
        case "✌✊":
        case "✊✋":
        case "✋✌":
            cscore.contents = String(Number(cscore.contents) + 1);
            document.querySelector('.computer .cscore').textContent = cscore.contents;
            break;
        case "✊✊":
        case "✋✋":
        case "✌✌":
            break;
        case "✌✋":
        case "✊✌":
        case "✋✊":
            pscore.contents = String(Number(pscore.contents) + 1);
            document.querySelector('.user .pscore').textContent = pscore.contents;
            break;
        };
        if(Number(pscore.contents)>=5){
            document.getElementById("win").textContent = "YOU WIN!";
            var audio = new Audio('_Victory Song_ - Chinese Patriotic Song.mp3');
            audio.play();
            window.alert("你赢了");

        }
        if(Number(cscore.contents)>=5){
            document.getElementById("win").textContent = "YOU LOSE!";
            var audio = new Audio('mixkit-crowd-disappointment-long-boo-463.wav');
            audio.play();
            window.alert("你输了");
        }
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
