const Media = require('../model/media');

const findBy = async (param, term = '') => {
  const expression = new RegExp(term, 'gi');
  try {
    return await Media.find({[param]: expression});
  } catch (err) {
    return null;
  }
};

const getTop = async (by, limit) => {
  try {
    return await Media.find({}).sort(`-${by}`).limit(limit);
  } catch (err) {
    return null;
  }
};

module.exports = {
  findBy,
  getTop
};
