import express from 'express';

const app = express();
const PORT = 3002; 

app.use(express.json());

app.post('/bid', (req, res) => {
    const bidRequest = req.body;

    // Process the bid request and generate a response
    const bidResponse = {
        id: bidRequest.id,
        bid: Math.random() * 100, // Example: Random bid amount
        currency: 'USD',
        ad: {
            creative: 'Sample Ad Creative',
            clickUrl: 'https://example.com',
        },
    };

    res.json(bidResponse);
});

// Health check route
app.get('/health', (req, res) => {
    res.send('DSP Server 2 is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`DSP Server 2 is running on http://localhost:${PORT}`);
});