const controller = {};
const path = require('path');
const parseDirectory = require('../../src/helpers/directoriesListHelper')

controller.tree = (req, res) => { 

  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT name FROM path WHERE id = ?", [id], (err, path) => {
      (Promise.resolve(path).then(path =>
        parseDirectory(
           path[0].name 
        )))
                     
    })
  })
};

module.exports = controller;
   




