const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: " localhost",
  user: "user",
  password: "answjddn123!@#",
  database: "practice",
});
exports.main = (cb) => {
  var sql = "SELECT * FROM practice";
  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("현 회원수 :", rows);
    cb(rows);
  });
};
