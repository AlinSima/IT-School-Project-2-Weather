const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

const scrollButton = document.querySelector("#scroll-to-top");
scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
document.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.visibility = "hidden";
  }
});
