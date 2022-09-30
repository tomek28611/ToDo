const express = require('express');
const router = express.Router();
const Questionnaire = require('../models/questionnaire');

/* GET home page. */
router.get('/', (req, res) => {
  const show = !req.session.vote;
  Questionnaire.find({}, (err, data) => {
 
    res.render('questionnaire', { title: 'Questionnaire', data, show });
  })
});


router.post('/', (req, res) => {
  const id = req.body.questionnaire;

  Questionnaire.findOne({_id: id}, (err, data) => {
    data.vote = data.vote + 1;
    data.save((err) => {
      req.session.vote = 1;
      res.redirect('/questionnaire');
    });
  });
});



module.exports = router;