const city_name = document.getElementById("input1");
const button_one = document.getElementById("button1");
const temperature = document.getElementById("l1");
const FeelsLike = document.getElementById("l2");
const Region = document.getElementById("l3");
const Condition = document.getElementById("l6");
const a = document.getElementById("kk");
const z = document.getElementById("screen")

async function GetData(city_name) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=a1a93436393d4889a7364406242409&q=${city_name}&aqi=yes`);
    return await promise.json();
    
}

button_one.addEventListener("click", async () => {
    const value = city_name.value;
    const result = await GetData(value);
    temperature.innerText = `${result.current.temp_c}\u00B0 C`;
    FeelsLike.innerText = `Feels Like : ${result.current.feelslike_c}\u00B0 C`;
    Region.innerText = `Region : ${result.location.region}`;
    Condition.innerText = `${result.current.condition.text}`;
    console.log(result);
    a.innerHTML = `<img id="l5" src="${result.current.condition.icon}" width="100%" height="100%" alt="">`;
    const x = result.current.temp_c;
    console.log(x);
});
    
//this is a comment





