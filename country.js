const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feelsLike');
const description = document.getElementById('description');
const search = document.getElementById('submitForm');
const inputValue = document.querySelector('.inputValue');
const hightemp = document.getElementById('hightemp');
const lowtemp = document.getElementById('lowtemp');
function imageChange(descr){
  if(descr=='clear sky'){
     document.getElementById("sunpic").src='suns.jpeg';
  }
  else if (descr=='few clouds') {
       document.getElementById("sunpic").src='fewclouds.jpeg';
  }
  else if (descr=='broken clouds') {
       document.getElementById("sunpic").src='fewclouds.jpeg';
  }
  else if (descr=='light rain') {
       document.getElementById("sunpic").src='lightrain.jpeg';
  }
  else if (descr=='scattered clouds') {
       document.getElementById("sunpic").src='fewclouds.jpeg';
  }
  else if (descr=='overcast clouds') {
       document.getElementById("sunpic").src='fewclouds.jpeg';
  }
  else if (descr=='moderate rain') {
       document.getElementById("sunpic").src='lightrain.jpeg';
  }
}

  search.addEventListener('click',()=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9ac1f534f82c61e98535f3ab6886dd7d';
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      var cityName = data['name'];
      var temperature = data['main']['temp'];
      var newTemp = Math.round(((((parseFloat(temperature))-273.15)*9)/5)+32);



      var feels = data['main']['feels_like'];
      var newFeelsLikeTemp = Math.round(((((parseFloat(feels))-273.15)*9)/5)+32);
      var desc = data['weather'][0]['description'];
      var mintemp = data['main']['temp_min'];
      var maxtemp = data['main']['temp_max'];
      var realMaxTemp = Math.round(((((parseFloat(maxtemp))-273.15)*9)/5)+32);
        var realMinTemp = Math.round(((((parseFloat(mintemp))-273.15)*9)/5)+32);
      hightemp.innerHTML='High: ' + realMaxTemp;
      lowtemp.innerHTML='Low: '+ realMinTemp;
      city.innerHTML=cityName;
      temp.innerHTML=newTemp+ '\u00B0';
      feelsLike.innerHTML='feels like '+newFeelsLikeTemp+ '\u00B0';
      description.innerHTML=desc;
      imageChange(desc);
      document.getElementById("hotpic").src='hightemp.jpeg';
      document.getElementById("coldpic").src='lowtemp.jpeg';
    })
    .catch(error=>{
      console.log("error");
    })
  });
