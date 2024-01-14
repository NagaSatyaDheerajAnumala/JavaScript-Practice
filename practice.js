function getWeather(weather){
  return new Promise(function(resolve, reject){
    resolve('Rainy')
  })
}

function getWeatherIcon(weather){
  return new Promise(function(resolve, reject){
    switch(weather){
      case 'Sunny':
        resolve('🌞');
        break; 
        resolve('☁️');
        break;
      case 'Rainy':
        resolve('🌧️');
        break;
      default:
        reject("No information");
    }
  })
}

getWeather().then(getWeatherIcon).then(function(data){
  console.log(data);
}, function(data){
  console.log('The reject data is ', data)
})