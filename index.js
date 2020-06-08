const app = require('./web-server');

app.listen(
  process.env.PORT || 8000,
  () => console.log("Listening at port 8000")
);