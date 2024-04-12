const iconWe= document.querySelector(".weather-icon")
const inputWe= document.querySelector(".inOne")
const searchWe= document.querySelector(".oneButton")
const error= document.querySelector(".error")
const condition= document.querySelector(".condi")
const region= document.querySelector(".region")
const temp= document.querySelector(".temp")
const day= document.querySelector(".day")
const humid= document.querySelector("#humidity")
const speed= document.querySelector("#Wind-speed")

async function checkWeather(city){
  try {
    const api_key="6fbb41936ebf142979b5aa62db0f07e9";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const response = await fetch(`${url}`);
    const weather_data =await response.json();
    // console.log(weather_data);
      temp.innerHTML=`${Math.round(weather_data.main.temp -273)}&#176 C`;
      condition.innerHTML=`${weather_data.weather[0].description}`;
      region.innerHTML=`${weather_data.name}`
      humid.innerHTML=`${weather_data.main.humidity}%`
      speed.innerHTML=`${weather_data.wind.speed} Km/Hr`
      if(weather_data.weather[0].description.includes("clouds")){
        iconWe.src="./images/clouds.png"
      }
      else if(weather_data.weather[0].description.includes("clear")){
        iconWe.src="./images/clear.png"
      }
      else if(weather_data.weather[0].description.includes("mist")){
        iconWe.src="./images/mist.png"
      }
      else if(weather_data.weather[0].description.includes("rain")){
        iconWe.src="./images/rain.png"
      }
      else if(weather_data.weather[0].description.includes("drizzle")){
        iconWe.src="./images/drizzle.png"
      }
      else if(weather_data.weather[0].description.includes("snow")){
        iconWe.src="./images/snow.png"
      }
      console.log(weather_data)
  } catch (error) {
    console.log("Error",error)
  }  
 

  
}
searchWe.addEventListener("click",function(){
    checkWeather(inputWe.value);
})
