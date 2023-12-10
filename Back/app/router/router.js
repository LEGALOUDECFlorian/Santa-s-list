const express = require('express');


const router = new express.Router();
const listsController = require('../controllers/listsController');
const childsController = require('../controllers/childsController');

// Appelle toutes les listes
router.get('/lists', listsController.findAll);


//route pour les enfants
router.patch('/childs/:id', childsController.updateOne);
router.delete('/childs/:id', childsController.deleteOne);
router.get('/childs', childsController.findAll);
router.post('/childs', childsController.addChild);


module.exports = router;