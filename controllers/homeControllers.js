const BigPromise = require("../middlewares/bigPromise");
const Property = require("../models/property");

exports.home = BigPromise(async (req, res, next) => {
  //Search all the properties in the database and return them according to their rating in descending order
  const properties = await Property.find()
    .sort({ rating: -1 })
    .populate("propertyOwner", "name email");

  //Return the properties
  res.status(200).json({
    success: true,
    message: "Welcome to Airbnb Clone",
    properties,
  });
});
