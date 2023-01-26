import React, { useState } from 'react';

function Kisalomake () {

    const [kisa, setValues] = useState({
        paikka: '',
        hevonen: '',
        pvm: '',
        taso: '',
        tulos: '',
        kuvaus: ''
});

const [viesti, setViesti] = useState('');


const muuta = (e) => {
  setValues({
    ...kisa,
    [e.target.name]: e.target.value
    
  });
  setViesti('');
};

  const lisaaKilpailu = (e) => {
    e.preventDefault();

    setValues({
        paikka: '',
        hevonen:'',
        pvm:'',
        taso:'',
        tulos:'',
        kuvaus: ''
    });
    setViesti('Kilpailu lisätty')
  }

  return (
   <div> <form>
        <label htmlFor='paikka'>Kilpailu paikka </label>
        <input type='text' name='paikka' value={kisa.paikka} onChange={ (e) => muuta(e) }  /><br />
        <label htmlFor='hevonen'>Hevonen </label>
        <input type='text' name='hevonen' value={kisa.hevonen} onChange= { (e) => muuta(e) } /><br />
        <label htmlFor='pvm'>Päivämärä </label>
        <input type='text' name='pvm' value={kisa.pvm} onChange={ (e) => muuta(e) }  /><br />
        <label htmlFor='taso'>Taso </label>
        <input type='text' name='taso' value={kisa.taso} onChange= { (e) => muuta(e) } /><br />
        <label htmlFor='tulos'>Tulos </label>
        <input type='text' name='tulos' value={kisa.tulos} onChange={ (e) => muuta(e) } /><br />
        <label htmlFor='kuvaus'>Oma analyysi radasta: </label>
        <input type='text' name='kuvaus' value={ kisa.kuvaus } onChange={ (e) => muuta(e) } /><br />
        <input type='submit' value='Lisää' onClick={ (e) => lisaaKilpailu(e) } />
        
    </form>
    <p>{ viesti }</p>
    </div>
  );
}  

export default Kisalomake;