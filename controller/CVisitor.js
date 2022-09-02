const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
  Visitor.get_visitor(function (result) {
    // 얘는 Visitor.js에 있는 함수를 가져오겠다
    console.log(result);
    res.render("Visitor", { data: result });
  });
};
exports.post_visitor = (req, res) => {
  Visitor.post_visitor(req.body, function (result) {
    var data = {
      id: result,
      name: req.body.name,
      comment: req.body.comment,
    };
    res.send(data);
  });
};
