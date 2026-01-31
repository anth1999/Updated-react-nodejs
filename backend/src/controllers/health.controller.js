exports.healthCheck = (req, res) => {
  res.json({
    status: "OK",
    message: "Backend API is working 🚀"
  });
};
