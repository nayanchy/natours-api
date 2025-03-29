const express = require('express');
const {
  getAllTours,
  createNewTour,
  getSingleTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  aliasTopCheaper,
  getTourStats,
  getMonthlyPlan,
} = require('../controllers/tourController');

const router = express.Router();

// Parameter middleware
// router.param('id', checkId);

router.route('/top-5-cheapest').get(aliasTopCheaper, getAllTours);
router.route('/top-5-tours').get(aliasTopTours, getAllTours);
router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/').get(getAllTours).post(createNewTour);
router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
