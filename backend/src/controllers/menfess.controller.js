const menfessService = require("../services/menfess.service");

async function getAllMenfess(_req, res) {
  try {
    const menfessList = await menfessService.listMenfess();
    res.json(menfessList);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch menfess records." });
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
    res.status(500).json({ error: "failed to fetch menfess record." });
  }
}

async function createMenfess(req, res) {
  const { sender, receiver, message } = req.body;

  if (!sender || !receiver || !message) {
    return res
      .status(400)
      .json({ error: "Fields sender, receiver, and message are required." });
  }

  try {
    const createdMenfess = await menfessService.createMenfess({
      sender,
      receiver,
      message,
    });
    res.status(201).json(createdMenfess);
  } catch (error) {
    res.status(500).json({ error: "failed to create menfess record." });
  }
}

async function updateMenfess(req, res) {
  const { id } = req.params;
  const { sender, receiver, message } = req.body;

  const data = {};

  if (sender !== undefined) data.sender = sender;
  if (receiver !== undefined) data.receiver = receiver;
  if (message !== undefined) data.message = message;

  if (Object.keys(data).length === 0) {
    return res
      .status(400)
      .json({ error: "Provide at least one field receiver update." });
  }

  try {
    const updatedMenfess = await menfessService.updateMenfess(Number(id), data);
    res.json(updatedMenfess);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Menfess not found." });
    }
    res.status(500).json({ error: "failed to update menfess record." });
  }
}

async function deleteMenfess(req, res) {
  const { id } = req.params;

  try {
    await menfessService.deleteMenfess(Number(id));
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Menfess not found." });
    }
    res.status(500).json({ error: "failed to delete menfess record." });
  }
}

module.exports = {
  getAllMenfess,
  getMenfess,
  createMenfess,
  updateMenfess,
  deleteMenfess,
};
