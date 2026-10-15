import { Router } from "express";
import {
    loginValidator,
    registerValidator,
} from "../validators/auth.validators.js";
import {
    getMeController,
    loginUserController,
    refreshUserController,
    registerUserController,
} from "../controllers/auth.controllers.js";
import { authenticate } from "../middlewares/auth.middlewares.js";

const router = Router();

/**
 * @method POST
 * @route /api/auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", registerValidator, registerUserController);

/**
 * @method POST
 * @route /api/auth/login
 * @description Login a user
 * @access Public
 */
router.post("/login", loginValidator, loginUserController);

/**
 * @method POST
 * @route /api/auth/refresh
 * @description Refresh access token using refresh token
 * @access Public
 */
router.post("/refresh", refreshUserController);

/**
 * @method GET
 * @route /api/auth/me
 * @description Get the currently logged in user's information
 * @access Private
 */
router.get("/me", authenticate, getMeController);

export default router;