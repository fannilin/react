import React from 'react';

function Kisa(props) {
  return (
    <p>
      Paikka: { props.kilpailu.paikka }<br />
      Päivä: { props.kilpailu.paiva }<br />
      Hevonen: { props.kilpailu.hevonen }<br />
      Taso: { props.kilpailu.taso }<br />
      Tulos: {props.kilpailu.tulos}<br></br>
      Oma analyysi: { props.kilpailu.kuvaus }
    </p>
  );
} 

export default Kisa;
