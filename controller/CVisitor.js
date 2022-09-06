const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
  Visitor.get_visitor(function (result) {
    console.log(result);
    res.render("visitor", { data: result });
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

exports.delete_visitor = (req, res) => {
  Visitor.delete_visitor(req.body.id, function () {
    res.send("삭제 완료");
  });
};
