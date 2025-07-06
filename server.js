const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para listar archivos en una carpeta
app.get('/api/files/:folder', (req, res) => {
  const folder = req.params.folder;
  const folderPath = path.join(__dirname, 'public', 'assets', folder);
  
  // Verificar si la carpeta existe
  if (!fs.existsSync(folderPath)) {
    return res.status(404).json({ error: 'Carpeta no encontrada' });
  }
  
  // Leer el contenido de la carpeta
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta:', err);
      return res.status(500).json({ error: 'Error al leer la carpeta' });
    }
    
    // Filtrar solo archivos con extensiones permitidas
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.webm'];
    const filteredFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return allowedExtensions.includes(ext);
    });
    
    res.json(filteredFiles);
  });
});

// Ruta para manejar todas las demás solicitudes y servir la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
