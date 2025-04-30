const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const ListingController = require("../controllers/listings.js");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// router.post(upload.single('listing[image]'), (req, res) => {
//   res.send(req.file);
// });

//Index Route
router.get("/",  wrapAsync(ListingController.index));
  
  //New Route
  router.get("/new", isLoggedIn, ListingController.renderNewForm);
  
  //Show Route
  router.get("/:id",  wrapAsync(ListingController.showListing));
  
  //Create Route
  router.post(
   "/", isLoggedIn, validateListing,
   wrapAsync(ListingController.createListing)
);
//  router.post(upload.single('listing[image]'), (req, res) => {
//    res.send(req.file);
//  });
  
  //Edit Route
  router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync (ListingController.renderEditForm));
  
  //Update Route
  router.put("/:id", isLoggedIn,isOwner,
    validateListing,
     wrapAsync(ListingController.updateListing));
  
  //Delete Route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing));

  module.exports = router;