const express = require('express');
const router = express.Router();

//query string parametrs
router.get('/:year/:month', (req, res) => {
    res.send(req.query);
});

// year and month are REQUIRED
// sortBy - OPTIONAL (can be mentioned in a query string)

module.exports = router;