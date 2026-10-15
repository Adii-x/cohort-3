import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, verifyRefreshToken } from "../utils/auth.js";

/**
 * @method POST
 * @endpoint /api/auth/register
 * @description Create a new user account, accepting name, email, password and confirmPassword in the request body
 * @access Public
 */
export const registerUserController = async (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists",
        });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        name,
        email,
        password: hashPassword,
    });

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });

    await userModel.findOneAndUpdate({ _id: user._id }, { refreshToken });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(201).json({
        message: "User register successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
            },
            accessToken,
        },
    });
};

/**
 * @method POST
 * @endpoint /api/auth/login
 * @description Login a user, accepting email and password in the request body
 * @access Public
 */
export const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password",
        });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        return res.status(401).json({
            message: "Invalid email and password",
        });
    }

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });

    await userModel.findOneAndUpdate({ _id: user._id }, { refreshToken });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(200).json({
        message: "User logged in successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
            },
            accessToken,
        },
    });
};

/**
 * @member POST
 * @endpoint /api/auth/refresh-token
 * @description Issue a new access token using the refresh token from cookies
 * @access Public
 */
export const refreshTokenController = async (req, res) => {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh token is required",
        });
    }

    try {
        const decoded = verifyRefreshToken(refreshToken);

        const user = await userModel.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        if (refreshToken !== user.refreshToken) {
            await userModel.findOneAndUpdate(
                { _id: user._id },
                { refreshToken: null },
            );

            return res.status(401).json({
                message: "Unauthorized, refresh token mismatch",
            });
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens({
            userId: user._id,
        });

        res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

        await userModel.findOneAndUpdate(
            { _id: user._id },
            { refreshToken: newRefreshToken },
        );

        return res.status(200).json({
            message: "Token refresh successfully",
            accessToken,
        });
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired refresh token",
        });
    }
};

/**
 * @method POST
 * @endpoint /api/auth/logout
 * @description Logout user, clear refresh token from cookies and database
 * @access Public
 */
export const logoutUserController = async (req, res) => {
    const user = await userModel.findById(req.user.userId);

    if (!user) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    res.clearCookie("refreshToken");

    await userModel.findOneAndUpdate(
        {
            _id: user._id,
        },
        {
            refreshToken: null,
        },
    );

    return res.status(200).json({
        message: "User logged out successfully",
    });
};

/**
 * @method GET
 * @endpoint /api/auth/me
 * @description Get the currently authenticated user's information
 * @access Private
 */
export const getMeUserController = async (req, res) => {
    const user = await userModel.findById(req.user.userId);

    if (!user) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    return res.status(200).json({
        message: "User fetched successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
            },
        },
    });
};