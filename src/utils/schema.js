const Joi = require('joi');

const schema = Joi.object({
  displayname: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  image: Joi.string(),
});

module.exports = {
  schema,
};
