const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
// const api_router = express.Router();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))
// app.get('/', (req, res) => {
//   console.log(req.url)
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// })
app.get('biz/:id', (req, res) => {
  console.log(req.url)
  if (req.url === '/app.js') {
    res.sendFile(path.join(__dirname, 'public'))
  }
})
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
