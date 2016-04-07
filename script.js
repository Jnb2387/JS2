var reportBack = prompt("Please input anything into the prompt.");

alert("You entered, " + reportBack +  "\n The Length of your input is " + reportBack.length + 
        "\n Your input in all caps " + reportBack.toUpperCase() + "\n Your input in all lowercase " + 
         reportBack.toLowerCase() + "\n Your input's third character is " + reportBack[2] + 
         "\n Your input's substring character from 1 to 5 is  " + reportBack.substring(1,5) );

console.log(reportBack.length);

console.log(reportBack.toUpperCase());

console.log(reportBack.toLowerCase());

console.log(reportBack[2]);

console.log(reportBack.substring(1,5))