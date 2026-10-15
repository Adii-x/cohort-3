import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, verifyRefreshToken } from "../utils/auth.utils.js";

/**
 * @method POST
 * @route /api/auth/register
 * @description Register a new user, accepts name, email, and password in the request body
 * @access Public
 */
export const registerUserController = async (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists",
        });
    }

    const user = await userModel.create({
        name,
        email,
        password: await bcrypt.hash(password, 12),
    });

    const { accessToken, refreshToken } = generateTokens({
        userId: user._id,
        role: user.role,
    });

    await userModel.findOneAndUpdate(user._id, {
        refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    });

    return res.status(201).json({
        message: "User registered successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
                id: user._id,
            },
        },
        accessToken,
    });
};

/**
 * @method POST
 * @route /api/auth/login
 * @description Login a user, accepts email and password in the request body
 * @access Public
 */
export const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const { accessToken, refreshToken } = generateTokens({
        userId: user._id,
        role: user.role,
    });

    await userModel.findOneAndUpdate(user._id, {
        refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    });

    return res.status(200).json({
        message: "User logged in successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
                id: user._id,
            },
        },
        accessToken,
    });
};

/**
 * @method POST
 * @route /api/auth/refresh
 * @description Refresh access token using refresh token
 * @access Public
 */
export const refreshUserController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh token is missing",
        });
    }

    try {
        const decode = verifyRefreshToken(refreshToken);

        const user = await userModel.findById(decode.userId);

        if (refreshToken !== user.refreshToken) {
            await userModel.findOneAndUpdate(user._id, {
                refreshToken: null,
            });

            return res.status(400).json({
                message: "Refresh token mismatch",
            });
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens({
            userId: user._id,
            role: user.role,
        });

        await userModel.findOneAndUpdate(user._id, {
            refreshToken: newRefreshToken,
        });

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
        });

        res.status(200).json({
            message: "Refresh token roated successfully",
            accessToken,
        });
    } catch (error) {
        return res.status(401).json({
            message: "Invalid refresh token",
        });
    }
};

/**
 * @method GET
 * @route /api/auth/me
 * @description Get current logged in user
 * @access Private
 */
export const getMeController = async (req, res) => {
    const { userId } = req.user;

    const user = await userModel.findById(userId);

    return res.status(200).json({
        message: "user fetched successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        },
    });
};