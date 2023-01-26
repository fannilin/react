import React from 'react';
 
function Kisalista (props) {
    return (
      <div>
      { 
         props.kilpailu.map(kilpailu => {
          return (
             <p key={kilpailu.id}>
                  Paikka: { kilpailu.paikka }<br />
                  Päivä: { kilpailu.paiva }<br />
                  Hevonen: { kilpailu.hevonen }<br />
                  Taso: { kilpailu.taso }<br />
                  Tulos: {kilpailu.tulos} <br></br>
                  Kuvaus: { kilpailu.kuvaus }<br />
             </p>
          )
        })
     }
     </div>
  )
}

export default Kisalista;
