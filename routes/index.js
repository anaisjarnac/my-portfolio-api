const projectsRouter = require("./projects");

module.exports = (app) => {
  app.use("/projects", projectsRouter);
};