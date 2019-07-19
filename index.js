const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.send({hi:'there'});
});
console.log("now listening");

const PORT = 5000;
app.listen(PORT);