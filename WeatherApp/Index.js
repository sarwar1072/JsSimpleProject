
const apikey="eaed64d65b83117aec0c1a525cadf592";
const weatherDtEl=document.getElementById("weather-data")
const cityInp=document.getElementById("city-input")
const formEl=document.querySelector("form")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityval=cityInp.value;
   // console.log(cityval);
    getWeatherData(cityval);
});

async function getWeatherData(cityval){
  try{
    const response=await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${apikey}&units=metric`
    );
    if(!response.ok){
        throw new Error("Network response is not ok");
    }
   const data=await response.json();
  // console.log(data);
   const temperature=Math.round(data.main.temp);
   const description=data.weather[0].description
   const icon=data.weather[0].icon
   const details=[
    `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
   ];
   weatherDataEl.querySelector(
    ".icon"
  ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
  
  weatherDataEl.querySelector(
    ".temperature"
  ).textContent = `${temperature}°C`;

  weatherDataEl.querySelector(".description").textContent = description;
  
}


  catch(error){
   
  }  
}