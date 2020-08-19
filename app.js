const storage=new Storage();
const weatherLocation=storage.getLocationData();

const weather=new Weather(weatherLocation.city, weatherLocation.country);
const ui=new UI();
document.addEventListener('DOMContentLoaded', getWeather);
function getWeather(){
weather.getWeather()
.then(results=>{ui.paint(results);})
.catch(err=>console.log(err));
}
document.getElementById('w-change-btn').addEventListener('click', ()=>{
  const city=document.getElementById('city').value;
  const country=document.getElementById('country').value;
  weather.changeLocation(city, country);
  getWeather();
  storage.setLocationData(city, country);
  $('#locModal').modal('hide');
});