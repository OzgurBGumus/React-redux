const data ={
    name:'Ozgur'
};
const data2={
    surname:'GUMUS',
    age:17
};
const data3={
    city:'Istanbul'
}
const result = Object.assign(data, data2, data3);
console.log(result);