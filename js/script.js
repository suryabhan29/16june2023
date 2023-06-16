// In js file we can not write script tag
// function is a reusable block of code 
//1. function defination (one time process)
// global variabal any place define it and any place called it
// That is Global variabel
let fullName = 'SURYABHAN SINGH'; //variable declear and initiazlize

function myBike(){
    // function body
    // variable define inside a function is a local variable
    var bike = 'hero honda splendor';  // local variable
    console.log(bike);  // statement 
    console.log(fullName);
}

//2. function calling/invoking (many time process)
myBike();



