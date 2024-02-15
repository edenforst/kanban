import express from "express";
const app = express();
const port = 3000;

const usersRoutes = import('../routes/users');
const boardsRoutes = import('../routes/boards');
const cardsRoutes = import('../routes/cards');

// Utilisation des routes
app.use('/api/users', usersRoutes);
app.use('/api/boards', boardsRoutes);
app.use('/api/cards', cardsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my server kanban app!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});