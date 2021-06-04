const express = require('express');
const router = express.Router();
const request = require('request');

// @route   POST google api/getDistance
// @access  Public
router.post('/getDistance', (req, res) => {
    const {BaseLocation, TargetLocation, ApiURL, apikey} = req.body
    request.get({
        headers: {'content-type' : 'application/json'},
        url: `${ApiURL}origins=${BaseLocation}&destinations=${TargetLocation}&key=${apikey}`,
    }, function(error, response, body){
        res.json(response.body);
    });
});

module.exports = router;