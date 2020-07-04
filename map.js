const numbers = [1,2,3,4];

numbers.map(number =>{
    console.log(number *5);
})

const newNumbers = numbers.map(number=>number+2);
console.log(newNumbers);
newNumbers.map(number=>{
    console.log(number);
})