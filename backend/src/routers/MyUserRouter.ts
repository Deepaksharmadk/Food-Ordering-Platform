import express from "express";
const router = express.Router();
router.get("/", MyUserController.getCurrentUser);
router.route("/").get();
export default router;
