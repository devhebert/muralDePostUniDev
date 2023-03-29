const port = 3000
const express = require('express');
const path = require('path');
const apiRequest = require('./routes/api');

const app = express();

app.use("/api", apiRequest);
app.use("/", express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
