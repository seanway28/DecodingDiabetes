const router = require("express").Router();
const calorieController = require("../../controllers/calorieController");

router.route("/")
    .post(calorieController.create)
    .get(calorieController.findMany);

    router
    .route("/:id")
    .delete(calorieController.remove)
    .put(calorieController.update);

    module.exports = router;