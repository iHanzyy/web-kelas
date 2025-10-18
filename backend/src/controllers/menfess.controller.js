const menfessService = require("../services/menfess.service");

async function getAllMenfess(_req, res) {
  try {
    const menfessList = await menfessService.listMenfess();
    res.json(menfessList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menfess records." });
  }
}

async function getMenfess(req, res) {
  const { id } = req.params;

  try {
    const menfess = await menfessService.getMenfessById(id);

    if (!menfess) {
      return res.status(404).json({ error: "Menfess not found." });
    }

    res.json(menfess);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menfess record." });
  }
}

async function createMenfess(req, res) {
  const { from, to, message } = req.body;

  if (!from || !to || !message) {
    return res
      .status(400)
      .json({ error: "Fields from, to, and message are required." });
  }

  try {
    const createdMenfess = await menfessService.createMenfess({
      from,
      to,
      message,
    });
    res.status(201).json(createdMenfess);
  } catch (error) {
    res.status(500).json({ error: "Failed to create menfess record." });
  }
}

async function updateMenfess(req, res) {
  const { id } = req.params;
  const { from, to, message } = req.body;

  const data = {};

  if (from !== undefined) data.from = from;
  if (to !== undefined) data.to = to;
  if (message !== undefined) data.message = message;

  if (Object.keys(data).length === 0) {
    return res
      .status(400)
      .json({ error: "Provide at least one field to update." });
  }

  try {
    const updatedMenfess = await menfessService.updateMenfess(id, data);
    res.json(updatedMenfess);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Menfess not found." });
    }
    res.status(500).json({ error: "Failed to update menfess record." });
  }
}

async function deleteMenfess(req, res) {
  const { id } = req.params;

  try {
    await menfessService.deleteMenfess(id);
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Menfess not found." });
    }
    res.status(500).json({ error: "Failed to delete menfess record." });
  }
}

module.exports = {
  getAllMenfess,
  getMenfess,
  createMenfess,
  updateMenfess,
  deleteMenfess,
};
