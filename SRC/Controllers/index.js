const Model = require('../Models');
const { validationSchema } = require('../Validations');

const get = async (_req, res) => {
  const data = await Model.get();
  res.status(200).json(data);
};

const update = async ({ body }, res) => {
  const { error } = validationSchema.validate(body);
  if (error) return res.status(400).json({ message: error.message });
  await Model.update(body);
  res.status(200).end();
};

module.exports = { get, update };
