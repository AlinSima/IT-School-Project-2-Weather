function displayWeatherForecast(city) {
  const weatherForecastEndpoint = getForecastEndpoint(city);

  fetch(weatherForecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;
      const weatherForecast = document.querySelector(".weather-forecast");
      weatherForecast.innerHTML = "";

      const days = {};

      list.forEach((forecast) => {
        const { dt } = forecast;
        const dayOfTheWek = getDayOfTheWeek(dt);

        if (days[dayOfTheWek] !== undefined) {
          days[dayOfTheWek].push(forecast);
        } else {
          days[dayOfTheWek] = [forecast];
        }
      });

      console.log(days);

      for (const property in days) {
        weatherForecast.innerHTML += `
        <h2>${property}</h2>        
        `;
        const list = days[property];

        list.forEach((forecast) => {
          const { dt, main, weather } = forecast;
          const hour = getHour(dt);
          const weatherIcon = getWeatherIcon(weather[0].icon);
          const weatherDescription = weather[0].description;
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);

          weatherForecast.innerHTML += `
          <div class="d-flex justify-content-between">
          <p>${hour}</p>
          <img src="${weatherIcon}" alt="">
          <p>${weatherDescription}</p>
          <p>${temperature}°C</p>
          <p>Real feel: ${realFeel}°C</p>
  
          </div>
        `;
        });
      }
    });
}
