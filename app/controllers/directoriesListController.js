const controller = {};
const parseDirectory = require('../../src/helpers/directoriesListHelper')

controller.tree = (req, res) => {

  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT name FROM path WHERE id = ?", [id], (err, path) => {
      (Promise.resolve(path).then(path => 
        parseDirectory(
          path[0].name
        )))
        console.clear()
        console.log('clear' + '\n' + '\n' + "<<<<< TREE VIEW >>>>>" + '\n')

      res.render('terminal', {

      });
    })
  })
};

module.exports = controller;





