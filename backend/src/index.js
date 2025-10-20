const express = require("express");
const menfessRoutes = require("./routes/menfess.routes");
const requireApiKey = require("./middleware/apiKey");
const cors = require("cors");

const app = express();
const port = 3000;

const corsOptions = {
  origin: ["http://localhost:5173", "https://baskom-rpl.vercel.app"],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(requireApiKey);

app.get("/", (req, res) => {
  res.send("RPL JAYA JAYA JAYA!");
});

app.use("/menfess", menfessRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
