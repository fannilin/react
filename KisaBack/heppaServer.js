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
const db = new sqlite3.Database('hevoset.db');


app.listen(5000, () => {
    console.log('Node toimii localhost:5000/');
});

// Reititys on pelkkä / esim. localhost:8080/
app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Toimii' })
});


// Kaikkien rivin haku kannasta
app.get('/hevonen/all', (req, res, next) => {
	db.all("SELECT * FROM hevonen", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

// Yhden tietyn rivin haku kannasta
app.get('/hevonen/one/:id', (req, res, next) => {
    let id = req.params.id;
    db.get('SELECT * FROM hevonen where id=?', [id], (error, result) => {
        if (error) throw error;

        // Jos haku ei tuottanut yhtään riviä
        if (typeof(result) == 'undefined')  {
          return res.status(200).json({});
        }

        return res.status(200).json(result);
    });
});

// Kuvan lataaminen palvelimen hakemistoon
const multer = require('multer');

const storage = multer.diskStorage({
    destination:  (req, file, callback) => {
      callback(null, './kuvia')
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

// Kantaan lisääminen ja kuvan vienti images kansioon
app.post('/hevonen/add', upload.single('kuva'),  (req, res, next) => {
   // Lomakkeelta tulleet tiedot
    let tap = req.body;
    let kuvaNimi = null; // Jos kuvaa ei ole

    // Jos tuli tiedosto
    if (req.file) {
      kuvaNimi = req.file.originalname; // Kantaan laitettavan kuvan nimi on sama kuin alkuperäisen kuvan nimi
    }

    db.run('INSERT INTO hevonen (nimi, lempinimi, syntynyt, rotu, sukupuoli, kuva) VALUES (?, ?, ?, ?, ?, ?)', 
    [tap.nimi, tap.lempinimi, tap.syntynyt, tap.rotu, tap.sukupuoli, kuvaNimi], (error, result) => {
        if (error) throw error;

        return res.status(200).json( {count: 1} );
    })
})

// Kuvan lataaminen kuvia kansiosta
app.get('/download/:nimi', (req, res, next) => {
  let file = './kuvia/' + req.params.nimi;
  res.download(file);
});

// Rivin poistaminen kannasta
app.get('/hevonen/delete/:id', (req, res, next) => {
    // Otetaan parametrina  id
    let id = req.params.id;

    // Kuvan poistamienen puuttuu ratkaisusta -> vaatii tiedostojen hallintaa -> ei kuulu tälle opintojaksolle
    db.run('DELETE FROM hevonen WHERE id = ?', [id],  function (error, result) {
        if (error) throw error;

        return res.status(200).json( {count: this.changes} );
    });
 
});

// Jos mikään aiempi reititys on sopinut, silloin suoritetaan tämä
app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
});
