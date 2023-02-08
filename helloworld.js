console.log('sending a message');

// document.getElementById("first-para").innerHTML ='Hello!';

/*we want to change the link*/

const mydiv = document.getElementById("example");
const myinput = document.getElementById("myinput");
const mylink = document.getElementById("mylink");

// console.log(mydiv.style.backgroundColor);
console.log(myinput.value);
console.log(mylink.href);
// this is an instruction to change the href attribute to airbnb.co.uk
mylink.href = 'https://airbnb.co.uk';
myinput.value = 'Dummy text';
mydiv.style.backgroundColor = 'blue';

