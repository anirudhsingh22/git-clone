module.exports = async function serachByTerm(repository, query) {
  return await repository.findBy('name', query);
}