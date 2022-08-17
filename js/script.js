let select = document.querySelector('.select');
let cityContainer = document.querySelector('.city-container');

let param = {
    url: 'https://api.openweathermap.org/data/2.5/',
    key: 'a6edddf59770398659ebffc70f9bffc4',
};

function showWeather(data) {

    let weather = {
        temp: Math.round(data.main.temp - 273),
        weather: data.weather[0].main,
        img: data.weather[0].icon,
        name: data.name,
    }
    document.querySelector('.city-name').innerHTML = weather.name;
    document.querySelector('.city-temp').innerHTML = weather.temp + '&deg;';
    document.querySelector('.city-weather-img ').innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.img}@2x.png">`;
    document.querySelector('.city-weather-name').innerHTML = weather.weather;
    console.log(data);

}


async function getWeather() {

    const cityID = document.querySelector('.select').value;

    const responce = await fetch(`${param.url}weather?id=${cityID}&appid=${param.key}`, {
        method: 'GET',
    })
    const responceRes = await responce.json();

    if (responce.ok) {
        showWeather(responceRes);
    }
    else {
        document.querySelector('.city-temp').innerHTML = responceRes.message;
    }

}

getWeather();
select.onchange = getWeather;


