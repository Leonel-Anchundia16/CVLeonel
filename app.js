// app.js
const express = require('express');
const app = express();
const mongodb = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const MongoClient = mongodb.MongoClient;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let likes = 0; // Contador de "Me gusta" en memoria (puedes almacenarlo en la base de datos si lo deseas).

// Conexión a la base de datos
client.connect((err) => {
  if (err) {
    console.error('Error al conectar a MongoDB:', err);
  } else {
    console.log('Conexión exitosa a MongoDB');
  }
});

// Ruta para obtener el contador de "Me gusta"
app.get('/api/likes', (req, res) => {
  res.json({ likes });
});

// Ruta para incrementar el contador de "Me gusta"
app.post('/api/likes', (req, res) => {
  likes++;
  res.json({ likes });
});

// Ruta para servir tu hoja de vida en HTML
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
app.js
// const express = require('express');
// const app = express();
// const mongodb = require('mongodb');
// const dotenv = require('dotenv');
// dotenv.config();

// const MongoClient = mongodb.MongoClient;
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Variables para la base de datos
// let db;
// let likesCollection;

// // Conexión a la base de datos
// client.connect((err) => {
//   if (err) {
//     console.error('Error al conectar a MongoDB:', err);
//   } else {
//     console.log('Conexión exitosa a MongoDB');
//     db = client.db('cluster1'); 
//     likesCollection = db.collection('likes'); 
//   }
// });

// // Ruta para obtener el contador de "Me gusta"
// app.get('/api/likes', async (req, res) => {
//   try {
//     const doc = await likesCollection.findOne({});
//     if (doc) {
//       res.json({ likes: doc.likes });
//     } else {
//       res.json({ likes: 0 });
//     }
//   } catch (error) {
//     console.error('Error al obtener el contador de "Me gusta":', error);
//     res.status(500).json({ error: 'Ocurrió un error al obtener el contador de "Me gusta"' });
//   }
// });

// // Ruta para incrementar el contador de "Me gusta"
// app.post('/api/likes', async (req, res) => {
//   try {
//     const updateResult = await likesCollection.updateOne({}, { $inc: { likes: 1 } }, { upsert: true });
//     if (updateResult.modifiedCount || updateResult.upsertedCount) {
//       const doc = await likesCollection.findOne({});
//       res.json({ likes: doc.likes });
//     } else {
//       res.status(500).json({ error: 'Ocurrió un error al incrementar el contador de "Me gusta"' });
//     }
//   } catch (error) {
//     console.error('Error al incrementar el contador de "Me gusta":', error);
//     res.status(500).json({ error: 'Ocurrió un error al incrementar el contador de "Me gusta"' });
//   }
// });

// // Ruta para servir tu hoja de vida en HTML
// app.use(express.static('public'));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor activo en el puerto ${PORT}`);
// });
