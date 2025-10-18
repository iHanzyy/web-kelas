const crypto = require("crypto");

function timingSafeEqual(a, b) {
  const ab = Buffer.from(a || "", "utf8");
  const bb = Buffer.from(b || "", "utf8");
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

module.exports = function requireApiKey(req, res, next) {
  const provided = req.header("x-api-key") || req.query.api_key;
  const valid = process.env.INTERNAL_API_KEY;

  if (!provided || !timingSafeEqual(provided, valid)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
