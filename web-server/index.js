const express = require('express');
const app = express();
const { serachByTerm, searchByGenre, findTopViewed, findMediaName } = require('../usecases');
const { MovieRepository, VideoRepository } = require('../repositories/index');
const { generateBlobLocation  } = require('../utils');

app.use(express.static('./__videos__'))
app.use(express.static('./static'))

app.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query || query === '') return res.status(404).send('Nothing To Search');
  const data = await serachByTerm(MovieRepository, query);
  res.status(200).send(data);
});

app.get('/content', async (req, res) => {
  const genre = req.query.genre || '';

  if (!genre || genre === '') return res.status(404).send('Nothing To Search');
  const data = await searchByGenre(MovieRepository, genre);
  res.status(200).send(data);
});

app.get('/videos', async (req, res) => {
  const limit = +(req.query.limit || 5);

  if (limit === undefined || isNaN(limit)) return res.status(404).send('Incorrect Request');
  const data = await findTopViewed(MovieRepository, limit);
  res.status(200).send(data);
});

app.get('/library', async (req, res) => {
  const limit = +(req.query.media_id);

  if (limit === undefined || isNaN(limit)) return res.status(404).send('Incorrect Request');
  const data = await findMediaName(VideoRepository, limit);
  if (!data) return res.status(404).send('Not Found');
  res.status(200).send({location: generateBlobLocation(data.location)});
});

module.exports = app;