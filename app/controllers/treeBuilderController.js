const controller = {};

const builderTree = require("../../src/helpers/treeBuilderHelper");
// const SOLUTION = require("../../src/helpers/treeBuilderHelper");

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






// res.render('tree', {
           
// });

 
//   res.send(SOLUTION);






// app.get("/", (_req, res) => { 
//   const result = fs.readFileSync("web.html", "utf8");
//   res.send(result);
// });

// app.get("/dree", (_req, res) => {
//   res.send(SOLUTION);
// });

