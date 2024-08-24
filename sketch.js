async function weatherAPI() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

    console.log("Fetching the weather...");

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
    
        console.log(json);
        return(json);
      } catch (error) {
        console.error(error.message);
      }
}

function setup() {
  createCanvas(400, 400);
  const thistxt = weatherAPI();
  text(thistxt, 100,100);
}

function draw() {
  background(220);
}