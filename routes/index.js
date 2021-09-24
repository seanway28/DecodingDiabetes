const path = require("path");
const router = require("express").Router();
const apiRoute = require("./api");

// API routes
router.use("/api", apiRoutes);

// Use React as backup if API routes fail
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;