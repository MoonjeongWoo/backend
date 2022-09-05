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
exports.delete_visitor = (req, res) => {
  Visitor.delete_visitor(req.body.id, function () {
    res.send("삭제완료");
  });
};
// exports.update_visitor = (req, res) => {
//   Visitor.update_visitor(req.body.data, function () {
//     res.send(data);
//   });
// };
