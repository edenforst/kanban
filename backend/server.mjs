import express from "express";
import { default as usersRoutes } from "../backend/routes/users.js";
import { default as boardsRoutes } from "../backend/routes/boards.js";
import { default as cardsRoutes } from "../backend/routes/cards.js";

const app = express();
const port = 3000;

app.use(express.json());

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
