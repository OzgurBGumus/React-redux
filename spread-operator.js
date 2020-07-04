const data = [1,2,3,4,5];
const newData = [0, ...data];

console.log(...newData);


const data2 = {
    name:'Ozgur',
    surname:'Gumus'
}
const newData2 ={
    age:21,
    ...data2
}
console.log(newData2);