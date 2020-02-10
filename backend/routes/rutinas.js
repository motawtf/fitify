const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        result: 'success',
        path: 'api/rutinas',
        method: 'GET'
    });
});

module.exports = router;