import express from 'express';

const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to my blog API");
});

// About route
app.get('/about', (req, res) => {
    res.send('This is a simple Express app!');
});

// JSON route
app.get('/posts', (req, res) => {
    const posts = [
        { id: 1, title: 'Node.js Basics' },
        { id: 2, title: 'Understanding Express.js' },
    ];
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});