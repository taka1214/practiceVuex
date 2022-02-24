const express = require('express');
const router = express.Router();
const {connection} = require('../src/db/config')

router
  .get('/show', (req, res) => {
    connection.query('SELECT * FROM englishVocabs', (error, results) => {
      res.send(results);
    })
  })
  .post('/post', (req, res) => {
    connection.query("INSERT INTO englishVocabs SET ?", req.body, (error, results) => {
      res.redirect('/');
    })
  })
  .put('/update/english', (req, res) => {
    const post = {
      'english': req.body.modifiedEnglish,
    }
    const english = req.body.targetEnglish;
    connection.query("update englishVocabs set ? where english = ?", [post, english], (error, results) => {
      if (error) throw error;
    })
  })
  .put('/update/japanese', (req, res) => {
    const post = {
      'japanese': req.body.modifiedJapanese,
    }
    const japanese = req.body.targetJapanese;
    connection.query("update englishVocabs set ? where japanese = ?", [post, japanese], (error, results) => {
      if (error) throw error;
    })
  })
  .delete('/delete', (req, res) => {
    const id = req.body.id;
    connection.query('DELETE FROM englishVocabs WHERE id=?', id, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/')
    });
  })

module.exports = router