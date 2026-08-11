const { deploy } = require("../services/deployment.service");

const deployController = async (req, res) => {
  console.log("DEPLOY REQUEST RECEIVED:", req.body);

  try {
    const { repositoryUrl } = req.body;

    const result = await deploy(repositoryUrl);

    res.status(200).json(result);
  } catch (error) {
    console.error("DEPLOYMENT ERROR:", error);

    res.status(500).json({
      message: "Deployment failed",
      error: error.message,
    });
  }
};

module.exports = {
  deploy: deployController,
};