const express = require("express");

// Controllers
const { getRecentViewedTrips } = require("../controllers/tripsController");

const router = express.Router();

/**
 * Get recent viewed trips
 *
 * @name getRecentViewedTrips
 * @route {get} /api/v1/get-recent-viewed-trips
 * is asynchronous
 */
router.get("/get-recent-viewed-trips", getRecentViewedTrips);

module.exports = router;
