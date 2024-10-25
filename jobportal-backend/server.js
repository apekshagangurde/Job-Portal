const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can change this port if needed

app.use(cors());
app.use(express.json());

// Sample job data
const jobs = [
    { id: 1, title: "Software Intern", company: "Tech Company", location: "Nashik", applyLink: "http://example.com/apply" },
    { id: 2, title: "Marketing Intern", company: "Business Inc.", location: "Nashik", applyLink: "http://example.com/apply" },
    // Add more job listings as needed
];

// API endpoint to get jobs
app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
