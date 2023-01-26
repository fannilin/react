import React, { useState, useEffect } from 'react';
function Tieto () {
const [title, setTitle] = useState({nimi: '', osoite: ''});
const [viesti, setViesti] = useState('Haetaan ... ');
const fetchUrl = async () => {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
const json = await response.json();
console.log (json);
setTitle({nimi: json.items.name, osoite: json.items.address});
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
        Osoite: {title.osoite} <br></br>
       
    </div>
   
)
}


export default Tieto;
