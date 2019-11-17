const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM path', (err, path) => {
      if (err) {
        res.json(err);
      }

      res.render('paths', {
        data: path
      });

    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO path set ?', data, (err, path) => {
      console.log(path)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM path WHERE id = ?", [id], (err, rows) => {
      res.render('path_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newPath = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE path set ? where id = ?', [newPath, id], (err, rows) => {
      res.redirect('/');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM path WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
