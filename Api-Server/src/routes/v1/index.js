const { Router } = require("express");
const authRoutes = require("./auth-routes.js");
const buildRoutes = require("./build-routes.js");
const projectRoutes = require("./project-routes.js");
const { InfoController } = require("../../controllers/index.js");

const router = Router();

router.use("/auth", authRoutes);
router.use("/project", buildRoutes);
router.use("/getproject", projectRoutes);

// Checking api is live
router.get("/info", InfoController.info);

module.exports = router;
