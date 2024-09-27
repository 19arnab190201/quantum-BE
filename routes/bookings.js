const express = require("express");
const router = express.Router();

const { createBooking } = require("../controllers/bookingControllers");
const { isLoggedIn } = require("../middlewares/user");

router.route("/booking/create-booking").post(isLoggedIn, createBooking);

module.exports = router;
