import express from 'express';
import mongoose from'mongoose';

import usersRouter from './backend/routes/users.js';
import cardsRouter from './backend/routes/cards.js';
import boardsRouter from './backend/routes/boards.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/boards', boardsRouter);

app.use(express.static('frontend'));
app.get('/', (req, res) => {
    res.sendFile(join('public', 'index.html'));
});

// connect db then start server
(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Kanban');
    app.listen(port, () => console.log(`App started at: http://localhost:${port}`));
    console.log(`Connecté a MongoDB`);
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
})();



