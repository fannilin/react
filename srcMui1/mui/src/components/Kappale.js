import React, { useState, useEffect } from 'react';

function Kappale () {
    const [title, setTitle] = useState('');
    const [viesti, setViesti] = useState('Haetaan');

    const fetchUrl = async() => {
        try {
            const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.publicradio.org%2Fpublic_feeds%2Fsong-of-the-day%2Frss%2Frss');
            const json = await response.json();
            console.log(json.items);

            setTitle(json.items[0].title);
            setViesti('');
        } catch(error) {
            setViesti('Tietoja ei ole saatavilla');
        }
    }

    useEffect( () => { fetchUrl() }, [] );

    if (viesti.length > 0 ) {
        return (
            <p>{ viesti }</p>
        )
    }

    return (
        <p>
            Päivän biisi on { title }
        </p>
    )

}

export default Kappale;