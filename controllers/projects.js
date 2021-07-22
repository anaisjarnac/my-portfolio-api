const { find, create, findByCategory, delete_ } = require("../models/projects");

const getProject = async (req, res) => {
  const [project] = await findByCategory(req.params.id);
  res.status(200).json(project);
};

const getProjects = async (req, res) => {
  const [projects] = await find(req.query);
  res.status(200).json(projects);
};

const createProjects = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Ad has been created");
  } catch (err) {
    res.status(500).send("Error creating ad");
  }
};

const deleteProject = async (req, res) => {
  try {
    await delete_(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Error deleting ad");
  }
};

module.exports = {
  getProject,
  createProjects,
  getProjects,
  deleteProject,
};