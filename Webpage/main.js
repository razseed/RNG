// Random number generator take a minimum and maximum value inplace of result(x,y) generate a float and round down with Math.floor.
//console.log the result and find a way to display that in the DOM, also research how to tie max and min values to the userInput for <form>.
function random(min, max){
    return Math.floor(Math.random() * (max - min +1)) +min
}

let result = random(x,y);


