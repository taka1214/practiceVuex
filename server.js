const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const {connection} = require('./src/db/config')
const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
	app.use(cors())
}

app.use(serveStatic(__dirname + '/dist'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// app.get('/api/message', (req, res) => {
// 	res.send('get message')
// })

app.get('/api/show', (req, res) => {
  connection.query('SELECT * FROM englishVocabs',(error, results) => {
      res.send(results);
    }
  );
});

app.post('/api/post', (req, res) => {
  connection.query("INSERT INTO englishVocabs SET ?", req.body, (error, results) => {
    res.redirect('/');
  })
})

app.put('/api/update/english', (req, res) => {
  const post = {
    'english': req.body.modifiedEnglish,
  }
  const english = req.body.targetEnglish;
  connection.query("update englishVocabs set ? where english = ?", [post, english], (error, results) => {
    if (error) throw error;
    // res.redirect('/')
  })
})
app.put('/api/update/japanese', (req, res) => {
  const post = {
    'japanese': req.body.modifiedJapanese,
  }
  const japanese = req.body.targetJapanese;
  connection.query("update englishVocabs set ? where japanese = ?", [post, japanese], (error, results) => {
    if (error) throw error;
    // res.redirect('/')
  })
})

app.delete('/api/delete', (req, res) => {
  const id = req.body.id;
  connection.query('DELETE FROM englishVocabs WHERE id=?', id, (error, results, fields) => {
    if (error) throw error;
    res.redirect('/')
    // location.reload()
  });
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))