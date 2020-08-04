const express = require('express');
const router = express.Router();
const passport = require('passport');
const authenticate = passport.authenticate('jwt', { session: false });
const discussController = require('../controllers/discuss.controller');

router.get('/', discussController.getAllDiscuss);

router.post('/', authenticate, discussController.postDiscuss);

router.get('/:discussId', discussController.getDiscuss);

router.put('/:discussId', discussController.putDiscussView);

router.post('/:discussId/vote', authenticate, discussController.postVote);

module.exports = router;
