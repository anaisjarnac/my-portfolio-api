const projectsRouter = require("express").Router();
const {
  getProjects,
  createProjects,
  getProject,
  deleteProject,
} = require("../controllers/projects");

projectsRouter.get("/", getProjects);
projectsRouter.get("/:id", getProject);
projectsRouter.post("/", createProjects);
projectsRouter.delete("/:id", deleteProject);

module.exports = projectsRouter;
