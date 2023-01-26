import React, { useState } from 'react';
 
function KisalistaHaku (props) {
    const [paikka, setPaikka] = useState('');
    const [haetaan, setHaetaan] = useState(false);

    // Asettaa haettavan paikkakunnan
    const muuta = (e) => {
        setPaikka(e.target.value);
        setHaetaan(false);
    };

    // Asettaa todeksi, että haku saadaan tehdä
    const hae = () => {
        setHaetaan(true);
    };

    // Muuttuja, jonka sisältönä tulee olemaan haun tulos
    let haku = "";

    // Jos Hae painiketta painettiin
    if (haetaan) {
        // Filtteröidään taulukosta paikkakunnan perusteella
        let result = props.kilpailu.filter(kilpailu => kilpailu.paikka === paikka);

        // Jos filterointi tuotti tulosta
        if (result.length > 0) {
            // Mapataan haun tulos muuttujaan, joka näytetään komponetilla
            haku = result.map(kilpailu => {
                return (
                    <p key={kilpailu.id}>
                        Paikka: { kilpailu.paikka}<br />
                        Päivä: { kilpailu.paiva }<br />
                        Hevonen: { kilpailu.hevonen }<br />
                        Taso: { kilpailu.taso }<br />
                        Tulos: {kilpailu.tulos} <br></br>
                        Oma analyysi: { kilpailu.kuvaus }<br />
                    </p>
                ) // return
           }) // map
        } else {
            haku = "Et ole kilpaillut täällä";
        }
    }

    return (
        <div>
            <form>
                <label htmlFor='paikka'>Paikka </label>
                <input type='text' name='paikka' value={ paikka } onChange={ (e) => muuta(e) } />&nbsp;
                <input type='button' value='Hae' onClick={ () => hae() } />
            </form>
            {/* Näytetään haun tulos */}
            { <div>{ haku }</div> }
        </div>
    )

}

export default KisalistaHaku;
