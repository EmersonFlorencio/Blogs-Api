const validateCategory = (req, res, next) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: '"name" is required' });
  }
  next();
};

module.exports = validateCategory;