const router = require("express").Router();
const healthCardController = require("../../controllers/healthCardController");

router.route("/")
    .post(healthCardController.create)
    .post(healthCardController.update)
    .get(healthCardController.findOne);

module.exports = router;