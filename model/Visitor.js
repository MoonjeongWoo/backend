const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "answjddn123!@#",
  database: "kdt",
});

cnn.query("SELECT * FROM visitor", (err, rows) => {
  if (err) throw err;
  console.log("visitors :", rows);
});

exports.get_visitor = (cb) => {
  var sql = "SELECT * FROM visitor";
  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("visitors :", rows);

    cb(rows);
  });
};
