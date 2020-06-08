module.exports = async function findMostViewd(repository, limit) {
  return await repository.getTop('view_count', limit);
}