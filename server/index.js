const express = require('express');
const app = express();
const PORT = 6969;

const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');

app.use('/', loginRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log("Server running");
})