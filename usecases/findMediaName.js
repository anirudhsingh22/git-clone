module.exports = async function findMediaName(repository, media_id) {
  return await repository.findByMediaId(media_id);
}