const button = document.querySelector('button');
const list = document.querySelector('ul');
let textbox = document.querySelector('input');
let counter_id = 0;
function exterminate(button){
    const parent = button.closest('div');
    parent.remove();
}
button.addEventListener("click", function(){
    document.getElementById("item").focus();
    let container = document.createElement('div');
    let x = document.createElement('li');
    x.textContent = textbox.value;
    x.style.marginRight = '10px';
    container.appendChild(x);
    let delete1_button = document.createElement('button');
    delete1_button.textContent = 'Delete';
    delete1_button.addEventListener("click", function(){exterminate(this)});
    container.appendChild(delete1_button);
    container.style.display = 'flex';
    list.appendChild(container);
    textbox.value = '';
});

