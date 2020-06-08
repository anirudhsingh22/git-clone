const Video = require('../model/videos');

const findByMediaId = async (media_id) => {
  try {
    return await Video.findOne({media_id: [media_id]});
  } catch (err) {
    return null;
  }
};

module.exports = {
  findByMediaId
};
