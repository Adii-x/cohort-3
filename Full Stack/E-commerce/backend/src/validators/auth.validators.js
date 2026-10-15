import { body, validationResult } from "express-validator";

export const registerUserValidator = [
    body("name")
        .exists()
        .withMessage("Name is required")
        .bail()
        .trim()
        .isString()
        .withMessage("Name must be a string")
        .bail()
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be between 3 and 50 characters long"),
    body("email")
        .exists()
        .withMessage("Email is required")
        .bail()
        .trim()
        .isEmail()
        .withMessage("Email is invalid")
        .bail()
        .normalizeEmail(),
    body("password")
        .exists()
        .withMessage("Password is required")
        .bail()
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body("confirmPassword")
        .exists()
        .withMessage("Confirm Password is required")
        .bail()
        .trim()
        .custom((value, { req }) => value === req.body.password)
        .withMessage("Passwords do not match"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    },
];

export const loginUserValidator = [
    body("email")
        .exists()
        .withMessage("Email is required")
        .bail()
        .trim()
        .isEmail()
        .withMessage("Email is invalid")
        .bail()
        .normalizeEmail(),
    body("password")
        .exists()
        .withMessage("Password is required")
        .bail()
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    },
];
