const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/images', async (req, res) => {
    try {
        const query = req.query.query || 'funny';
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=LbsrQQIxrVVhKod51hnXkjIHfEa_K3PYGdtoRLjnQ6I`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));