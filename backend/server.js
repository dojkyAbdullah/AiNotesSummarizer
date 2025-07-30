const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;
const testAIController = require('./controllers/notesController');
const notesRoutes = require('./routes/notesRoutes');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/test-ai', testAIController.testAI);
app.use('/api/notes', notesRoutes);