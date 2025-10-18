const express = require("express");
const menfessRoutes = require("./routes/menfess.routes");
const requireApiKey = require("./middleware/apiKey");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requireApiKey);

app.get("/", (req, res) => {
  res.send("RPL JAYA JAYA JAYA!");
});

app.use("/menfess", menfessRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
