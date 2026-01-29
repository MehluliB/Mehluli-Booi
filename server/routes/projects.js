const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/projectsController');

// Public routes
router.get('/', ctrl.getProjects);
router.get('/:slug', ctrl.getProject);

// Admin (create/update/delete) - add auth middleware later
router.post('/', ctrl.createProject);
router.put('/:id', ctrl.updateProject);
router.delete('/:id', ctrl.deleteProject);

module.exports = router;
