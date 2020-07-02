const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json( {success: true, msg: 'Show all bootcamps'} )
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    const { params: { id } } = req;
    res.status(200).json( {success: true, msg: `Get bootcamp ${id}`} );
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json( {success: true, msg: 'Create new bootcamp'} )
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    const { params: { id } } = req;
    res.status(200).json( {success: true, msg: `Update bootcamp ${id}`} );
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    const { params: { id } } = req;
    res.status(200).json( {success: true, msg: `Delete bootcamp ${id}`} );
});

app.listen(PORT, () => `App is running on ${PORT} port`);
