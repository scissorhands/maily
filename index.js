const express = require('express');
require('./services/passport')

const app = express();
const PORT = 5000;

require('./routes/authRoutes')(app);

app.listen(PORT);