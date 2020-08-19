class UI{
  constructor(){
    this.location=document.getElementById('w-location');
    this.desc=document.getElementById('w-desc');
    this.string=document.getElementById('w-string');
    this.details=document.getElementById('w-details');
    this.icon=document.getElementById('w-icon');
    this.humidity=document.getElementById('w-humidity');
    this.wind=document.getElementById('w-wind');
    this.feelsLike=document.getElementById('w-feels-like');
    this.visibility=document.getElementById('w-visibility');
  }
  paint(weather){
    this.location.textContent=weather.name+', '+weather.sys.country;
    this.desc.textContent=(weather.weather[0].description).toUpperCase();
    this.string.textContent=weather.main.temp+' °C';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent=`Relative Humidity: ${weather.main.humidity}%`;
    this.wind.textContent=`Wind Speed: ${weather.wind.speed} meters/second`;
    this.feelsLike.textContent= `Feels Like: ${weather.main.feels_like} °C`;
    this.visibility.textContent=`Visibility: ${weather.visibility} m`;
  }
}