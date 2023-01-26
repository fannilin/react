import React from 'react';

function Matkalista (props) {
    return (
        <div>
            <h3>Matkalista</h3>
            {
                props.matkat.map(matka => {
                    return(
                        <p key={ matka.id }>
                            Otsikko: { matka.otsikko } <br />
                            Päivä: { matka.paiva } <br />
                            Kuvaus: { matka.kuvaus }
                        </p>       
                    )
                })
            }
        </div>
    )

}

export default Matkalista;