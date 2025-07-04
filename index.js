let search = document.querySelector(".input");
let city = document.querySelector(".city");
let country = document.querySelector(".country");
let date = document.querySelector(".date");
let template = document.querySelector(".template");
let clounds = document.querySelector(".clounds");
let eye = document.querySelector(".eye span");
let wind = document.querySelector(".wind span");
let sun = document.querySelector(".sun span");
let content = document.querySelector(".content");
let body = document.querySelector("body");
async function wearther(capitalValueSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValueSearch}&appid=702622646ad22e1f1ed2e03180881f8a`;
    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data);
    if(data.cod == 200){
        // console.log('hello');
        content.classList.remove(".hide");
        city.innerText = data.name? data.name:'Tokyo';
        country.innerText = data.sys.country;
        date.innerText = new Date().toLocaleString('vi');
        clounds.innerText = data.weather[0].main?data.weather[0].main:'';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        eye.innerText = data.visibility + 'm';
        let temp = Math.round((data.main.temp - 273.15));
        template.innerHTML = temp + `<sup>o</sup>C`;
        if(temp <= 20){
            body.setAttribute('class','cool');
        }
        else{
            body.setAttribute('class','ran');
        }
    }
    else{
        content.classList.add(".hide");
    }
}
search.addEventListener("keypress",function(e){
    if(e.code === 'Enter'){
        let capitalValueSearch = search.value.trim();
        wearther(capitalValueSearch);
    }
})