import { Router } from "express";
import {
    getMeUserController,
    loginUserController,
    logoutUserController,
    refreshTokenController,
    registerUserController,
} from "../controllers/auth.controllers.js";
import {
    loginUserValidator,
    registerUserValidator,
} from "../validators/auth.validators.js";
import { checkLoggedInUser } from "../middlewares/auth.middlewares.js";

const router = Router();

/**
 * @method POST
 * @endpoint /api/auth/register
 * @description Create a new user account
 * @access Public
 */
router.post("/register", registerUserValidator, registerUserController);

/**
 * @method POST
 * @endpoint /api/auth/login
 * @description Authenticate user, issue access + refresh tokens
 * @access Public
 */
router.post("/login", loginUserValidator, loginUserController);

/**
 * @method POST
 * @enpoint /api/auth/refrsh-token
 * @description Issue a new access token
 * @access Public
 */
router.post("/refresh-token", refreshTokenController);

/**
 * @method POST
 * @endpoint /api/auth/logout
 * @description Logout user, clear refresh token from cookies and database
 * @access Public
 */
router.post("/logout", checkLoggedInUser, logoutUserController);

/**
 * @method GET
 * @endpoint /api/auth/me
 * @description Get the currently authenticated user's information
 * @access Private
 */
router.get("/me", checkLoggedInUser, getMeUserController);

export default router;
