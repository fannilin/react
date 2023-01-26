import React from "react";
import CardsMui from './mui/CardsMui';
const data = [
  {
  id: 1, otsikko: 'Assi', paiva: '2022-02-29',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/assi.jpg",
  },
  {
  id: 2, otsikko: 'Myynti', paiva: '2022-03-01',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/myynti.jpg",
  },
  {
  id: 3, otsikko: 'Tiko', paiva: '2022-06-24',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/tiko.jpg",
  },
  {
  id: 4, otsikko: 'Bite', paiva: '2022-05-31',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen1.jpg",
  },
  {
  id: 5, otsikko: 'Muu', paiva: '2022-02-29',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen2.jpg"
  },
  ]
  

  function App() {
    return (
    <CardsMui tiedot= {data}/>
        
    );
  }

export default App;
