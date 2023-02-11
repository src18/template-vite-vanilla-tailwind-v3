// const myDisplay = (some) => {
//     document.querySelector('#app').innerHTML = some;
// }
// const mySum = (a, b, cc) => {
//     cc(a + b);

// }

// mySum(5, 5, myDisplay);
const loadScript = (src, callback) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    callback(script);
  };
  document.head.append(script);
};

loadScript("http://google.com", (script) => {
  console.log("cas", script);
});
