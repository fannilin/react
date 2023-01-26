const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('kilpailut.db');
db.serialize( () => {
let sql = 'CREATE TABLE kilpailu (' +
'id integer PRIMARY KEY NOT NULL, ' +
'paikka text NOT NULL, '  +
'hevonen text NOT NULL, ' +
'paiva text NOT NULL, ' +
'taso text NOT NULL, ' +
'tulos text NOT NULL, ' +
'kuvaus text)';

db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu tehtiin");
  })

  sql = "INSERT INTO kilpailu (id, paikka, hevonen, paiva, taso, tulos, kuvaus) "+
  " VALUES (1, 'Nova', 'Kamu', '2022-09-26', '120 cm', '0 vp', 'Hyvä rata, ensimmäisellä linjalla vähän lähelle tokaa, mutta pääsin korjaamaan rytmin sen jälkeen eteen ja loppurata hieno. 2.sija. ')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO kilpailu (id, paikka, hevonen, paiva, taso, tulos, kuvaus) "+
  " VALUES (2, 'Ypäjä', 'Kamu', '2022-11-12', '110 cm', '0 vp', 'Hyvä rata, ensimmäisellä esteellä vähän lähelle, mutta rytmin sen jälkeen eteen ja otin linjoilta yhdet askeleet pois (8, 9 askeleen sijaan). 3.sija.')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  db.each("SELECT id, paikka FROM kilpailu", (err, row) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(row.id + ", " + row.paikka);

});

db.close();
})
