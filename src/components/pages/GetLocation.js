import { useEffect, useState } from "react";

function GetLocation() { 

const [LocationData, setLocationData] = useState("");
  const getCurrentLocation = (position) => {
console.log("position:", position);
const data= {
lat: position.coords.latitude,
long: position.coords.longitude,
};


setLocationData(data);
};   

useEffect(() => {
 
navigator.geolocation.getCurrentPosition(getCurrentLocation);


}, []);

console.log("LocationData:::::", LocationData);

    

  return (
    <main>
     <h1>Get Location</h1>
    <h3>latitude: {LocationData.lat}</h3>
    <h3>longitude: {LocationData.long}</h3>
    </main>
  );
  
};
export default GetLocation;