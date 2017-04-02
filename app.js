const form = document.getElementById('weather')
const city = document.getElementById('city')
const country = document.getElementById('country')
const uri = 'https://locationiq.org/v1/search.php?key='
const apiKey = 'f87b1b7a84af84977b16'
// const uri1 = 'https://api.darksky.net/forecast/937f508a241426655575a868f8a47194/37.8267,-122.4233'
const wthr = `https://api.wunderground.com/api/bcecc8a867d1ff6a/conditions/lang:EN/q/`
 let cityData = []
 form.addEventListener('submit', (e) => {
    e.preventDefault()
 const cityName = city.value
    const countryName = country.value
    
  let form=document.getElementById('weather')   
       

fetch(`${uri}${apiKey}&format=json&city=${cityName}&country=${countryName}`)
 .then((res) => res.json())
  .then((data) => {
    console.log(data)
    cityData.push(data[0].lon)
    console.log(cityData[0])
    cityData.push(data[0].lat)
    console.log(cityData[1])
    // return cityData
    fetch(`${wthr}${cityData[1]},${cityData[0]}.json`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let temp1 = data.current_observation.temp_c

        let weather = data.current_observation.weather
        console.log(weather)
        const main = document.getElementById('display')
        const test = document.createElement('ul')
        const temp = document.createElement('li')
        const img = document.createElement('img')
        
        let relative_humidity = document.createElement('h1')
       
        temp.textContent = 'Temperature:'+data.current_observation.temp_c+'°'

     

const weather1 = document.createElement('li')
weather1.textContent = 'feelslike:'+data.current_observation.feelslike_c+'°'
test.appendChild(weather1)

// const humidity1 = document.createElement('h1')
// relative_humidity.textContent='Humidity:'+data.current_observation.relative_humidity
// test.appendChild(humidity)
// for(let i=0;i<=6;i++){
    
if(weather=='Sunny')
{
    img.src = 'images/png/sunny.png'

        temp.appendChild(img)
        test.appendChild(temp)
}


else if (weather=='Clear')
{
    img.src = 'images/png/sunset.png'

        temp.appendChild(img)
        test.appendChild(temp)
        // relative_humidity.textContent='Humidity:'+data.current_observation.relative_humidity    
}

else if(weather=='Cloud')
{
     img.src = 'images/png/clouds.png'

        temp.appendChild(img)
        test.appendChild(temp)
}

else if(weather=='Rain')
{
     img.src = 'images/png/raining.png'

        temp.appendChild(img)
        test.appendChild(temp)
}

else if(weather=='Rainbow')
{
     img.src = 'images/png/rainbow-1.png'

        temp.appendChild(img)
        test.appendChild(temp)
}

 else if(weather=='Snow')
{
     img.src = 'images/png/snowflake.png'

        temp.appendChild(img)
        test.appendChild(temp)
}

else if(weather=='Wind')
{
     img.src = 'images/png/wind.png'

        temp.appendChild(img)
        test.appendChild(temp)
}




main.appendChild(test)
})
})
})




