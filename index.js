const express = require('express');
const fs = require('fs');

const app = express();

if (!process.env.PORT) {
  throw new Error('PORT env var must be set');
}

const port = process.env.PORT;

app.get('/video', (req, res) => {
  const path = 'video.mp4';
  fs.stat(path, (err, stats) => {
    if (err) {
      console.error(':( :( :(');
      res.sendStatus(500);
      return;
    }

    res.writeHead(200, {
      'Content-Length': stats.size,
      'Content-Type': 'video/mp4',
    });

    fs.createReadStream(path).pipe(res);
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
