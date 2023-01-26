import React, { useState, useEffect} from 'react';
function Avaruuskuva () {
    const[avaruuskuva, setKuva] = useState( { selitys: '', url: ''} );
    const[virhe, setVirhe] = useState('Haetaan ... ');

    const fetchUrl = async() => {
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
            const json = await response.json();
            console.log(json);

            setKuva( { selitys: json.explanation, url: json.url });
            setVirhe('');
        } catch(error) {
            setVirhe('Tietoja ei ole saatavilla');
        }
    }

    useEffect( () => { fetchUrl() }, [] );

    if (virhe.length > 0) {
        <div>{ virhe }</div>
    }

    return ( 
    <div>
        <img src={ avaruuskuva.url } alt='Avaruuskuva' width='200' height='200' />
        <p style={ { backgroundColor: 'gray', color: 'yellowgreen'} }>{ avaruuskuva.selitys }</p>
    </div> );
}

export default Avaruuskuva;