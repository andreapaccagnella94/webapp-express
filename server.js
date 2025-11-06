const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

/* add first route */
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});