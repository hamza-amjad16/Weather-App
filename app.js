
// function btn(){
//     location.href = 'welcome.html'
// }


function weather(){
    var getinp = document.getElementById('inp')
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getinp.value}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getinp.value}&units=metric&appid=9827195dba05ac7afaaab907e493d50d`)
    .then(function (data){
        return data.json()
    })
    .then(function (data){
        console.log(data)
        var getdiv = document.getElementById('div3')
        getdiv.innerHTML = `
        <h1 class="hh1">${data.main.temp}°C</h1> <br>
              <h2 >City : ${data.name}</h2> <br>
              <h2> ${data.weather[0].main}</h2>  <br> 
             `
             
      
    })
    .catch(function (data){
      alert(data)
    })
}
