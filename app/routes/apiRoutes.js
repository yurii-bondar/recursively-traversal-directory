const router = require('express').Router();

const crudController = require('../controllers/crudController');
const directoriesListController = require('../controllers/directoriesListController');
const treeBuilderControllers = require('../controllers/treeBuilderController');

router.get('/', crudController.list);
router.post('/add', crudController.save);
router.get('/update/:id', crudController.edit);
router.post('/update/:id', crudController.update);
router.get('/delete/:id', crudController.delete);
router.get('/tree/:id', directoriesListController.tree)

router.get('/dree/:id', treeBuilderControllers.dree)


module.exports = router;

