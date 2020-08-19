class Weather{
  constructor(city, country){
    this.apiKey='764ee7634de76b4b8adf30c57eae6b34';
    this.city=city;
    this.country=country;
  }
  async getWeather(){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);
    const responseData=await response.json();
    return responseData;
  }
  changeLocation(city, country){
    this.city=city;
    this.country=country;
  }
}