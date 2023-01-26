const express = require('express');
const app = express();

// Tietoturvakirjasto
var helmet = require('helmet');
//app.use(helmet());

app.use(helmet( { crossOriginResourcePolicy: false } ));

// Käyttää oletuksena JSON muotoista dataa
app.use(express.json());  

// Asetus, jotta kuvia voidaan ladata
app.use(express.urlencoded( {limit: '5mb', extended: true} ));

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('kilpailut.db');

// back kuuntelee porttia 8080
app.listen(8080, () => {
    console.log('Node toimii localhost:8080');
});

// Reititys on pelkkä / esim. localhost:8080/
app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Toimii' })
});

// Reititys on /kilpailu/all esim. localhost:8080/kilpailu/all
// Kaikkien rivin haku kannasta
app.get('/kilpailu/all', (req, res, next) => {
	db.all("SELECT * FROM kilpailu", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

// Yhden tietyn rivin haku kannasta
app.get('/kilpailu/one/:id', (req, res, next) => {
    let id = req.params.id;
    db.get('SELECT * FROM kilpailu where id=?', [id], (error, result) => {
        if (error) throw error;

        // Jos haku ei tuottanut yhtään riviä
        if (typeof(result) == 'undefined')  {
          return res.status(200).json({});
        }

        return res.status(200).json(result);
    });
});



// Kantaan lisääminen 
app.post('/kilpailu/add',  (req, res, next) => {
   // Lomakkeelta tulleet tiedot
    let tap = req.body;

    db.run('INSERT INTO kilpailu (paikka, hevonen, paiva, taso, tulos, kuvaus) VALUES (?, ?, ?, ?, ?, ?)', 
    [tap.paikka, tap.hevonen, tap.paiva, tap.taso, tap.tulos, tap.kuvaus ], (error, result) => {
        if (error) throw error;

        return res.status(200).json( {count: 1} );
    })
})


// Rivin poistaminen kannasta
app.get('/kilpailu/delete/:id', (req, res, next) => {
    // Otetaan parametrina tulleen kilpailun id
    let id = req.params.id;

    // Kuvan poistamienen puuttuu ratkaisusta -> vaatii tiedostojen hallintaa -> ei kuulu tälle opintojaksolle
    db.run('DELETE FROM kilpailu WHERE id = ?', [id],  function (error, result) {
        if (error) throw error;

        return res.status(200).json( {count: this.changes} );
    });
 
});

app.all('/kilpailu/all/:paikka', (req, res, next) => {
    let paikka = req.params.paikka;
 
    db.all("SELECT * FROM kilpailu where paikka like ?", [paikka], (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});


// Jos mikään aiempi reititys on sopinut, silloin suoritetaan tämä
app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
});
