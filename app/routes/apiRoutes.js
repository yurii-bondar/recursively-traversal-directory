const router = require('express').Router();

const crudController = require('../controllers/crudController');
const directoriesListController = require('../controllers/directoriesListController');

router.get('/', crudController.list);
router.post('/add', crudController.save);
router.get('/update/:id', crudController.edit);
router.post('/update/:id', crudController.update);
router.get('/delete/:id', crudController.delete);
router.get('/tree/:id', directoriesListController.tree)

module.exports = router;

