// server/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import giftsRouter from "./routes/gifts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// static assets (built client will end up in server/public)
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/scripts", express.static(path.join(__dirname, "public", "scripts")));

// quick root check
app.get("/", (_req, res) => {
    res
        .status(200)
        .send('<h1 style="text-align:center;margin-top:50px;">UnEarthed API</h1>');
});

// API routes
app.use("/gifts", giftsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
