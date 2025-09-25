// server/server.js
import express from "express";
import "./config/dotenv.js";
import path from "path";
import { fileURLToPath } from "url";
import giftsRouter from "./routes/gifts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- ADDED: serve client root so /styles.css (and other top-level assets) work
app.use(express.static(path.join(__dirname, "..", "client"))); // serves /index.html (when requested directly), /styles.css, etc.

// Serve client static assets from the ../client/public folder so
// the browser can load scripts, styles and images referenced by the client
app.use("/public", express.static(path.join(__dirname, "..", "client", "public")));
app.use("/scripts", express.static(path.join(__dirname, "..", "client", "public", "scripts")));

// --- OPTIONAL BUT NICE: also serve /logo.png and other public assets at root
app.use(express.static(path.join(__dirname, "..", "client", "public")));

// Serve the client index.html at the root so the page can fetch from /gifts
app.get("/", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

// API routes
app.use("/gifts", giftsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
