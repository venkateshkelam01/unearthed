// server/routes/gifts.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import GiftsController from "../controllers/gifts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Serve data from Postgres
router.get("/", GiftsController.getGifts);

// Keep serving the detail page (static HTML) for deep links
router.get("/:giftId", (_req, res) => {
    res
        .status(200)
        .sendFile(path.resolve(__dirname, "..", "..", "client", "public", "gift.html"));
});

export default router;
