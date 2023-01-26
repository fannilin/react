import React, { useState, useEffect } from 'react';
function Tieto () {
const [title, setTitle] = useState({nimi: '', kayttaja: '', kaupunki: ''});
const [viesti, setViesti] = useState('Haetaan ... ');
const fetchUrl = async () => {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
const json = await response.json();
console.log (json);
setTitle({nimi: json.name, kayttaja: json.username, kaupunki: json.address.city});
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
        Nimi: {title.nimi} <br></br>
        Käyttäjä: {title.kayttaja} <br></br>
        Kaupunki: {title.kaupunki}
    </div>
   
)
}


export default Tieto;
