import { body, validationResult } from "express-validator";

export const registerValidator = [
    body("name")
        .exists()
        .withMessage("Name is required")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Name cannot be empty")
        .bail()
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be at least 3 characters long"),
    body("email")
        .exists()
        .withMessage("Email is required")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Email cannot be empty")
        .bail()
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),
    body("password")
        .exists()
        .withMessage("Password is required")
        .bail()
        .notEmpty()
        .withMessage("Password cannot be empty")
        .bail()
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

export const loginValidator = [
    body("email")
        .exists()
        .withMessage("Email is required")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Email cannot be empty")
        .bail()
        .isEmail()
        .withMessage("Invalid email format"),
    body("password")
        .exists()
        .withMessage("Password is required")
        .bail()
        .notEmpty()
        .withMessage("Password cannot be empty"),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    },
];
