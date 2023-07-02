const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39ca86376emshba3ef014cb7d846p1e2a0ejsn05b2000e08d3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response => 
        {
            console.log(response)
            cloud_pct.innerHTML=response.cloud_pct
            temp1.innerHTML=response.temp
            temp.innerHTML=response.temp
            feels_like.innerHTML=response.feels_like
            humidity.innerHTML=response.humidity
            humidity1.innerHTML=response.humidity
            min_temp.innerHTML=response.min_temp
            max_temp.innerHTML=response.max_temp
            wind_speed.innerHTML=response.wind_speed
            wind_speed1.innerHTML=response.wind_speed
            sunrise.innerHTML=response.sunrise
            sunset.innerHTML=response.sunset
            cityName.innerHTML=city
            //   wind_degrees.innerHTML=response.wind_degrees
      })
	.catch(err => console.error(err));
}
    //DOM
    document.addEventListener("click",(e)=>{
        e.preventDefault()
        document.getElementById("submit")
        getWeather(city.value)
    })
    getWeather("Jamshedpur")