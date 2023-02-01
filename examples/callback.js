const myDisplay = (some) => {
    document.querySelector('#app').innerHTML = some;
}
const mySum = (a, b, cc) => {
    cc(a + b);    
    
}

mySum(5, 5, myDisplay);