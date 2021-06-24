const express = require('express');
const DUMMY_STRINGS = ['cat', 'dog', 'goat', 'hamster'];
const router = express.Router();

/** GETs all strings */
router.get('/', async (req, res) => res.json({ strings: DUMMY_STRINGS }));

/** POSTs new string to prepend to strings */
router.post('/', async (req, res) => {
  const { string } = req.body;
  if (!string) throw new Error('String must not be empty');
  DUMMY_STRINGS.unshift(string);
  return res.json({ strings: DUMMY_STRINGS });
});

module.exports = router;
