 const searchInput = document.querySelector('.search input');
 const searchBtn = document.querySelector('.search button');
 const image = document.querySelector('.icon');

 async function getWeather(city) {
     var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f820bb5f189afaeb013d38354603f64&units=metric`);

if (res.status == `404`) {
  document.querySelector('.error').style.display = "block"; 
   document.querySelector('.weather').style.display="none";
} else {
    document.querySelector('.error').style.display = "none";  
    document.querySelector('.weather').style.display="block";
}

    var data = await res.json();

console.log(data);

   document.querySelector('.celcius').innerHTML= Math.round(data.main.temp)+ "°c";
   document.querySelector('.city').innerHTML= data.name; 
   document.querySelector('.humidityP').innerHTML=Math.round(data.main.humidity)+ "%"; 
   document.querySelector('.windS').innerHTML=   Math.round(data.wind.speed) + "km/h ";
   
   if (data.weather[0].main == "Clouds") {
    image.src = "images/clouds.png"
   } 
else if (data.weather[0].main == "Clear") {
    image.src = "images/clear.png"  
}
else if (data.weather[0].main == "Rain") {
    image.src = "images/rain.png"  
}
else if (data.weather[0].main == "Drizzle") {
    image.src = "images/drizzle.png"  
}
else if (data.weather[0].main == "Haze") {
    image.src = "images/haze.png"  
}
else if (data.weather[0].main == "Snow") {
    image.src = "images/snow.png"  
}
else if (data.weather[0].main == "Mist") {
    image.src = "images/mist.png"  
}
else if (data.weather[0].main == "Heavy Snowfall") {
    image.src = "images/heavy.png"  
}
else if (data.weather[0].main == "Thunderstorm") {
    image.src = "images/thunderstorm.png"  
}
 }
searchBtn.addEventListener('click', () =>{
    getWeather(searchInput.value);
});
