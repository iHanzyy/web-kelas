const prisma = require("../db/index");

async function listMenfess() {
  return prisma.menfess.findMany({
    orderBy: { createdAt: "desc" },
  });
}

async function getMenfessById(id) {
  return prisma.menfess.findUnique({ where: { id } });
}

async function createMenfess(data) {
  return prisma.menfess.create({ data });
}

async function updateMenfess(id, data) {
  return prisma.menfess.update({
    where: { id },
    data,
  });
}

async function deleteMenfess(id) {
  return prisma.menfess.delete({
    where: { id },
  });
}

module.exports = {
  listMenfess,
  getMenfessById,
  createMenfess,
  updateMenfess,
  deleteMenfess,
};
