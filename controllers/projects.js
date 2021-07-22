const { findMany, create, getOne, delete_ } = require("../models/projects");

const getProjects = async (req, res) => {
  const [project] = await getOne(req.params.id);
  res.status(200).json(ad);
};

const getProjects = async (req, res) => {
  const [projects] = await findMany(req.query);
  res.status(200).json(ads);
};

const createProjects = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Ad has been created");
  } catch (err) {
    res.status(500).send("Error creating ad");
  }
};

const deleteProjects = async (req, res) => {
  try {
    await delete_(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Error deleting ad");
  }
};

module.exports = {
  getProjects,
  createProjects,
  getProjects,
  deleteProjects,
};