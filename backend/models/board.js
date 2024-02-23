const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    columns: [{ type: String }] // Par exemple, une liste de noms de colonnes
    // Vous pouvez ajouter d'autres champs en fonction de vos besoins
});

const Board = mongoose.model('Board', boardSchema);

export default router;