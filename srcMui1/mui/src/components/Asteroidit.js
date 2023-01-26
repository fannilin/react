import React, { useState, useEffect  } from 'react';

function Asteroidit () {

  const [taulukko, setTaulukko] = useState( [] );
  const [virhe, setVirhe] = useState('Haetaan ...');

  const [paiva] = useState( () => { // wwww-kk-pp  2022-09-12
    let tanaan = new Date();
    let kk = (tanaan.getMonth() + 1 < 10 ? "0" + (tanaan.getMonth() + 1) : tanaan.getMonth());
    let pp = (tanaan.getDate() < 10 ? "0" + tanaan.getDate()  : tanaan.getDate());
    return tanaan.getFullYear() + '-' + kk + '-' + pp;
  });

  const fetchUrl = async (paiva) => {
    try {
      const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + paiva + '&end_date=' + paiva + '&api_key=DEMO_KEY');
      const json = await response.json();
      setTaulukko(json.near_earth_objects[paiva]);
      setVirhe('');
    } catch (error) {
      setVirhe('Tietojen haku ei onnistunut');
    }
  }

  useEffect(() => {
    fetchUrl(paiva);
  }, [paiva]);

  if (taulukko.length === 0) {
    return <div>{ virhe }</div>
  }

  return (
    <div>
    {
      taulukko.map(asteroid => {
        return (
          <div key={ asteroid.name }>
          { asteroid.name }, { asteroid.close_approach_data[0].miss_distance.kilometers } km
          </div>
        )
      })
    }
    </div>
  )
}

export default Asteroidit;
