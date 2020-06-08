module.exports = async function searchByGenre(repository, genre) {
  return await repository.findBy('genre', genre);
}