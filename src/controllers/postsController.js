const postsDatabase = require("../models/postsDatabase");

const getPostsCon = async (req, res) => {
  try {
    const posts = await postsDatabase.getAll();
    res.json(posts);
    console.log("Obtenido");
  } catch (error) {
    console.log(error);
  }
};

const addPostCon = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await postsDatabase.addPost(postBody);
    res.json(post);
    console.log("Enviado");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPostsCon,
  addPostCon,
};
