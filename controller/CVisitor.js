const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
  Visitor.get_visitor(function (result) {
    console.log(result);
    res.render("Visitor", { data: result });
  });
};
