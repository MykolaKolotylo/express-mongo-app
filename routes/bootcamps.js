const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json( {success: true, msg: 'Show all bootcamps'} )
});

router.get('/:id', (req, res) => {
    const { params: { id } } = req;
    res.status(200).json( {success: true, msg: `Get bootcamp ${id}`} );
});

router.post('/', (req, res) => {
    res.status(200).json( {success: true, msg: 'Create new bootcamp'} )
});

router.put('/:id', (req, res) => {
    const { params: { id } } = req;
    res.status(200).json( {success: true, msg: `Update bootcamp ${id}`} );
});

router.delete('/:id', (req, res) => {
    const { params: { id } } = req;
    res.status(200).json( {success: true, msg: `Delete bootcamp ${id}`} );
});

module.exports = router;
