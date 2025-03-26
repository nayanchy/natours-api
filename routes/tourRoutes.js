const express = require('express');
const {
  getAllTours,
  createNewTour,
  getSingleTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourController');

const router = express.Router();

// Parameter middleware
// router.param('id', checkId);

router.route('/').get(getAllTours).post(createNewTour);
router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
