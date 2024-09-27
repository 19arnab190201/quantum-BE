const express = require("express");
const router = express.Router();

const {
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty,
  getAllProperties,
  getMyProperties,
  getMyProperty,
} = require("../controllers/propertyController");

const { isLoggedIn } = require("../middlewares/user");

router.route("/add-property").post(isLoggedIn, createProperty);
router.route("/property/:id").get(getProperty);
router.route("/property/:id").put(isLoggedIn, updateProperty);
router.route("/property/:id").delete(isLoggedIn, deleteProperty);
router.route("/properties").get(getAllProperties);
router.route("/my-properties").get(isLoggedIn, getMyProperties);
router.route("/my-property/:id").get(isLoggedIn, getMyProperty);

module.exports = router;
