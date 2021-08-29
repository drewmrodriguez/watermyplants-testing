const db = require("../../data/dbConfig");

function getAllPlants() {
  return db("Plants");
}

function getByPlantId(PlantId) {
  return db("Plants").where("plantId", PlantId);
}

async function updatePlantByPlantId(UpdatedPlant) {
  await db("Plants").where("plantId", UpdatedPlant.plantId).update(UpdatedPlant);

  return getByPlantId(UpdatedPlant.plantId);
}

async function addPlant(plantToAdd) {
  return await db("Plants").insert(plantToAdd, ["plantId", "nickname", "species", "h2oFrequency"]);
}

async function deletePlant(plantId) {
  await db("Plants").where("plantId", plantId).del();
  return getAllPlants();
}

module.exports = {
  getAllPlants,
  getByPlantId,
  updatePlantByPlantId,
  addPlant,
  deletePlant,
};