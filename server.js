const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// In-memory store for visitor counts (for simplicity)
let visitorCountMain = 0;
let visitorCountDayCare = 0;
let visitorCountVisit = 0;
let visitorCountFinal = 0;
let visitorCountFinal2 = 0;

// Function to get visitor count by page
const getVisitorCount = (page) => {
    switch (page) {
        case 'main':
            return visitorCountMain;
        case 'daycare':
            return visitorCountDayCare;
        case 'visit':
            return visitorCountVisit;
        case 'final':
            return visitorCountFinal;
        case 'final2':
            return visitorCountFinal2;
        default:
            return 0;
    }
};

// Function to increment visitor count by page
const incrementVisitorCount = (page) => {
    switch (page) {
        case 'main':
            visitorCountMain++;
            return visitorCountMain;
        case 'daycare':
            visitorCountDayCare++;
            return visitorCountDayCare;
        case 'visit':
            visitorCountVisit++;
            return visitorCountVisit;
        case 'final':
            visitorCountFinal++;
            return visitorCountFinal;
        case 'final2':
            visitorCountFinal2++;
            return visitorCountFinal2;
        default:
            return 0;
    }
};

// API to get visitor count
app.get('/api/visitor-count/:page', (req, res) => {
    const page = req.params.page;
    const count = getVisitorCount(page);
    res.json({ count });
});

app.get('/reset', (req, res) => {
    visitorCountMain = 0;
    visitorCountDayCare = 0;
    visitorCountVisit = 0;
    visitorCountFinal = 0;
    visitorCountFinal2 = 0;
});

// API to increment visitor count
app.post('/api/visitor-count/:page', (req, res) => {
    const page = req.params.page;
    const count = incrementVisitorCount(page);
    res.json({ count });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});