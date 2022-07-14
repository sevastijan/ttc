const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

/**
 * Routes
 */
const tripsRoutes = require("./routes/tripRoutes");

app.use("/v1", tripsRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Express is running`);
});
