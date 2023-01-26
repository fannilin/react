const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('hevoset.db');
db.serialize( () => {
let sql = 'CREATE TABLE hevonen (' +
'id integer PRIMARY KEY NOT NULL, ' +
'nimi text NOT NULL, '  +
'lempinimi text NOT NULL, ' +
'syntynyt text NOT NULL, ' +
'rotu text NOT NULL, ' +
'sukupuoli text NOT NULL, ' +
'kuva text)';

db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu tehtiin");
  })

  sql = "INSERT INTO hevonen (id, nimi, lempinimi, syntynyt, rotu, sukupuoli, kuva) "+
  " VALUES (1, 'Commando', 'Kamu', '2005', 'Tanskalainen puoliverinen', 'ruuna', 'kamu.jpg')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO hevonen (id, nimi, lempinimi, syntynyt, rotu, sukupuoli, kuva) "+
  " VALUES (2, 'Luciferina LH', 'Luci', '2012', 'Holstainer', 'tamma', 'luci.jpg')";
 
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  db.each("SELECT id, lempinimi FROM hevonen", (err, row) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(row.id + ", " + row.lempinimi);

});

db.close();
})
