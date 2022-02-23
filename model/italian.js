const express = require('express');
const router = express.Router();
const {connection} = require('../src/db/config')

router
  .get('/show', (req, res) => {
    connection.query('SELECT * FROM italianVocabs;',(error, results) => {
      res.send(results);
    });
  })
  .post('/post', (req, res) => {
    connection.query("INSERT INTO italianVocabs SET ?", req.body, (error, results) => {
      res.redirect('/show/italian');
    })
  })
  .put('/update/italian', (req, res) => {
    const post = {
      'italian': req.body.modifiedItalian,
    }
    const italian = req.body.targetItalian;
    connection.query("update italianVocabs set ? where italian = ?", [post, italian], (error, results) => {
      if (error) throw error;
      // res.redirect('/')
    })
  })
  .put('/update/japanese', (req, res) => {
    const post = {
      'japanese': req.body.modifiedJapanese,
    }
    const japanese = req.body.targetJapanese;
    connection.query("update italianVocabs set ? where japanese = ?", [post, japanese], (error, results) => {
      if (error) throw error;
      // res.redirect('/')
    })
  })
  .delete('/delete', (req, res) => {
    const id = req.body.id;
    connection.query('DELETE FROM italianVocabs WHERE id=?', id, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/')
      // location.reload()
    });
  })
  

module.exports = router