const input = document.querySelector('input');
const output = document.querySelector('output');
const button = document.querySelector('button');
button.onclick = _ => input.value = "clear";
input.onchange = e => output.innerText = e.target.value;

window.myinput = input;


