// Transform from decimal to Binary 
// Number 
// Divide by 2 every time 
// if reminder 1 or 0 
// Revers order 

alert("Here")
function decimalToBinary (number) {
    console.log("Started");
    let parsedNumber = number
    let bits = [];
    while(parsedNumber > 0){
        bits.push(parsedNumber % 2);
        parsedNumber = parseInt(parsedNumber / 2);
    }
    console.log("Finished");
    const bytes =  bits.reverse().join('');
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}


const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', decimalToBinary);



// console.log(decimalToBinary(350));