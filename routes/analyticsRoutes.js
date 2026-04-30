const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/analyticsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/recommendations')
    .get(protect, getRecommendations);

module.exports = router;
