const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

// Serve static files
app.use(express.static('public'));

// Routes for different racks
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/rack1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rack1.html'));
});

app.get('/racka4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'racka4.html'));
});

app.get('/racka5', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'racka5.html'));
});

app.get('/racka6', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'racka6.html'));
});

app.get('/racka7', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'racka7.html'));
});

app.get('/racka8', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'racka8.html'));
});

app.get('/rackb1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rackb1.html'));
});

app.get('/rackb2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rackb2.html'));
});

// API endpoints for rack data
app.get('/api/rack1/devices', (req, res) => {
    res.json(require('./data/rack1.json'));
});

app.get('/api/racka4/devices', (req, res) => {
    res.json(require('./data/racka4.json'));
});

app.get('/api/racka5/devices', (req, res) => {
    res.json(require('./data/racka5.json'));
});

app.get('/api/racka6/devices', (req, res) => {
    res.json(require('./data/racka6.json'));
});

app.get('/api/racka7/devices', (req, res) => {
    res.json(require('./data/racka7.json'));
});

app.get('/api/racka8/devices', (req, res) => {
    res.json(require('./data/racka8.json'));
});

app.get('/api/rackb1/devices', (req, res) => {
    res.json(require('./data/rackb1.json'));
});

app.get('/api/rackb2/devices', (req, res) => {
    res.json(require('./data/rackb2.json'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});