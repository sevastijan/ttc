const fs = require("fs");
const path = require("path");

/**
 * getRecentViewedTrips
 * @param {*} req
 * @param {*} res
 */
const getRecentViewedTrips = (req, res) => {
  try {
    const data = JSON.parse(
      /**
       * This function can be turned into an asynchronous one
       * and at this point retrieve data from any database.
       */
      fs.readFileSync(
        path.join(__dirname, "../mock/data-recently-viewed-trips.json"),
        "UTF-8"
      )
    );

    return res.json(data);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getRecentViewedTrips };
