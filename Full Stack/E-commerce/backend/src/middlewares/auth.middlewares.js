import { verifyAccessToken } from "../utils/auth.js";

export function checkLoggedInUser(req, res, next) {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (!accessToken) {
        return res.status(401).json({
            message: "Access token is required",
        });
    }

    try {
        const decoded = verifyAccessToken(accessToken);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid access token",
        });
    }
}
