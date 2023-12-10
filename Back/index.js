require('dotenv').config();
const express = require('express');
const router = require('./app/router/router');

const PORT = process.env.PORT;

const app = express();

// Mise en place des body-parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mise en place du router
app.use(router);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Le bonheurs c'est ici => http://localhost:${PORT}`);
});
