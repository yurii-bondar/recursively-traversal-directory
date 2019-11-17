const controller = {};

const builderTree = require("../../src/helpers/treeBuilderHelper");

controller.dree = (req, res) => {

  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT name FROM path WHERE id = ?", [id], (err, path) => {
      (Promise.resolve(path).then(path =>
        builderTree(
          path[0].name
        )))
      res.send(builderTree(path[0].name))

      res.render('tree', {

      });
    })
  })
};

module.exports = controller;

