const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('questionnaire', { title: 'Questionnaire' });
});



module.exports = router;