const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "answjddn123!@#",
  database: "kdt",
});

// cnn.query("SELECT * FROM visitor", (err, rows) => {
//   if (err) throw err;
//   console.log("visitors :", rows);
// });

exports.get_visitor = (cb) => {
  var sql = "SELECT * FROM visitor";
  //   변수에 sql문 저장 하기
  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("visitors :", rows);

    cb(rows);
  });
};
exports.post_visitor = (data, cb) => {
  var sql = `INSERT INTO visitor(name, comment) values('${data.name}', '${data.comment}')`;
  cnn.query(sql, (err, result) => {
    if (err) throw err;
    console.log("visitors :", result);
    cb(result.insertId);
  });
};
exports.delete_visitor = (id, cb) => {
  var sql = `DELETE FROM visitor WHERE id = ${id}`;
  cnn.query(sql, (err, result) => {
    if (err) throw err;
    console.log("visitors :", result);

    cb();
  });
};
exports.update_visitor = (data, cb) => {
  var sql = `UPDATE visitor SET(name, comment) WHERE values('${data.name}', '${data.comment}')`;
  cnn.query(sql, (err, result) => {
    if (err) throw err;
    console.log("visitors :", result);
    cb(result.updateId);
  });
};
