const Test = require("../model/Test");

exports.main = (req, res) => {
  Test.main(function (result) {
    // console.log(result);
    res.render("hello", { data: result });
  });
};
exports.show = (req, res) => {
  Test.show(req.body, function (result) {
    var data = {
      id: req.body.id,
      password: req.body.password,
      name: req.body.name,
    };
    res.send(data);
  });
};
