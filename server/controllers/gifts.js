// server/controllers/gifts.js
import { pool } from "../config/database.js";

const getGifts = async (_req, res) => {
    try {
        const result = await pool.query(
            `SELECT id, name, pricepoint as "pricePoint", audience, image,
              description, submittedby as "submittedBy", submittedon as "submittedOn"
       FROM gifts
       ORDER BY id ASC`
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("getGifts error:", error);
        res.status(409).json({ error: error.message });
    }
};

export default { getGifts };
