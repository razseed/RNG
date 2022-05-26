//Written and Authored by Christian McRae.
function random(max,min){
    return Math.floor(Math.random()*(max - min +1)+min)
};

function displayRandomValues(){
    let Minimum = document.getElementById('Minimum').value;
    let Maximum = document.getElementById('Maximum').value;
    let min = parseFloat(Minimum);
    let max = parseFloat(Maximum);
    console.log(min);
    console.log(max);
    const result = random(min,max);
    console.log(result);
    document.getElementById('output').innerHTML="Your result is:   ";
    document.getElementById('finalSum').innerHTML= result;
}
let btn = document.getElementById('Result');
btn.addEventListener("click",displayRandomValues)
// Random number generator take a minimum and maximum value inplace of result(x,y) generate a float and round down with Math.floor.
//console.log the result and find a way to display that in the DOM, also research how to tie max and min values to the userInput for <form>.

//Failed attempts at making it function below for reference.


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
   
   /*
   function random(max,min){
       return Math.floor(Math.random()*(max - min +1)) + min
   }
   */
   /*
   function userinputs() {
       let Minimum = document.getElementById('Minimum').value;
       Minimum = parseFloat(Minimum);
       let Maximum = document.getElementById('Maximum').value;
       Maximum = parseFloat(Maximum);
       console.log(Minimum)
       console.log(Maximum)
    }
    */
   /*
    let variables = ['',''];
   console.log(variables)
   
   function baseValue () {
       let Minimum = document.getElementById('Minimum').value;
       Minimum = parseFloat(Minimum);
       Minimum = Minimum ? Minimum: 0;
       console.log(Minimum);
       variables.push(Minimum);
    }
    
    function maxValue() {
        let Maximum = document.getElementById('Maximum').value;
        Maximum = parseFloat(Maximum);
        Maximum = Maximum ? Maximum : 0;
        console.log(Maximum);
        variables.push(Maximum);
    }
   function displayMessage(){
       document.getElementById("answer").innerHTML = "show this line";
   }
   let btn = document.getElementById("result");
   btn.addEventListener("click", displayMessage)
   
   let randomValue = variables[Math.floor(Math.random()*variables.length)];
console.log(randomValue);
*/
