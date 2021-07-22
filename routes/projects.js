const projectsRouter = require("express").Router();
const {
  getProjects,
  createProjects,
  getProjects,
  deleteProjects,
} = require("../controllers/projects");

projectsRouter.get("/", getProjects);
projectsRouter.get("/:id", getProjects);
projectsRouter.post("/", createProjects);
projectsRouter.delete("/:id", deleteProjects);

module.exports = projectsRouter;
