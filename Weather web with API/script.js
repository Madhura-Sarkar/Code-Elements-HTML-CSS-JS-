const input = document.getElementById("city")
const button = document.getElementById("btn")

const cityname = document.getElementById("name")
const citytime = document.getElementById("time")
const citytemp = document.getElementById("temp")

// http://api.weatherapi.com/v1/current.json?key=f78bfc1f220444faa7591458252701&q=Kolkata&aqi=yes

async function getWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f78bfc1f220444faa7591458252701&q=${city}&aqi=yes`)
    return await response.json()
}

button.addEventListener("click", async () => {
    const value = input.value
    const result = await getWeather(value)
    console.log(result);

    cityname.innerText = result.location.name
    citytime.innerText = result.location.localtime

    const temperature = result.current.temp_c // Always in Celsius
    citytemp.innerText = `${temperature}°C`
})
