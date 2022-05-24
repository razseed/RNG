// Random number generator take a minimum and maximum value inplace of result(x,y) generate a float and round down with Math.floor.
//console.log the result and find a way to display that in the DOM, also research how to tie max and min values to the userInput for <form>.


function displayMessage(){
    document.getElementById("answer").innerHTML = "show this line";
}
let btn = document.getElementById("result");
btn.addEventListener("click", displayMessage)


// document.forms to get HTML Form Value in Javascript
/*
let base = document.getElementById('Minimum');
base.setAttribute('value', base.value);
console.log(base)
*/
/*
function inputs() {
    let Minimum = document.getElementById('Minimum').value;
    let Maximum = document.getElementById('Maximum').value;
    Minimum = parseFloat(Minimum);
    Maximum = parseFloat(Maximum);
    function random(max, min){
       return Math.floor(Math.random() * (max-min+1)) +min  
    }
    const result = random[0,10);
    console.log(result);
}
//let result = inputs();
//console.log(result)
*/

