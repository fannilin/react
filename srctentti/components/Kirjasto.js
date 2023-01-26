import React, { useState, useEffect } from 'react';

function Kirjasto () {
const [title, setTitle] = useState({nimi: '', osoite: ''});
const [viesti, setViesti] = useState('Haetaan ... ');
const fetchUrl = async () => {
try {
const response = await fetch('https://api.kirjastot.fi/v4/library?city.name=Helsinki&limit=1');
const json = await response.json();
console.log (json);
setTitle(
    {
        nimi: json.items.name, 
    osoite: json.items.address
});

setViesti('');
} catch (error) {
setViesti('Tietoja ei ole saatavilla');
}
}
useEffect( () => { fetchUrl() }, [] );
if (viesti.length >0){
<p>{viesti}</p>
}
return (
    <div>
        <h2>Helsingin kirjastot</h2><br></br>
        Nimi: { title.nimi } <br></br>
        Käyttäjä: { title.osoite } <br></br>
       
    </div>
   
)
}


export default Kirjasto;
