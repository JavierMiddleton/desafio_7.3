const postsRouter = require("express").Router();
const {
  getPostsCon,
  addPostCon,
} = require("../../controllers/postsController");

postsRouter.get("/", getPostsCon);
postsRouter.post("/", addPostCon);

module.exports = postsRouter;
