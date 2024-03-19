const express = require('express');
const firebaseAdmin = require('firebase-admin');

// Inicializa Firebase Admin SDK
var serviceAccount = require("./config/appentrenadorfit-firebase-adminsdk-7rn6y-91d330931c.json");

const app = express();
app.use(express.json());

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://appentrenadorfit.firebaseapp.com' // Reemplaza con la URL de tu base de datos de Firebase
});

// Endpoint para manejar el registro de usuario
app.post('/register', async (req, res) => {
  try {
    const { nombres, apellidos, fechaNacimiento, email, contraseña,confirmarContraseña } = req.body;
    
    console.log('Datos recibidos para registro:', req.body); // Agrega un console.log para verificar los datos recibidos

    // Guarda los datos en Firebase Firestore
    const userRef = await firebaseAdmin.firestore().collection('Usuarios').add({
      nombres,
      apellidos,
      fecha_nacimiento: fechaNacimiento, // Asegúrate de que los nombres de los campos coincidan con los de tu base de datos Firestore
      correo: email,
      contrasena: contraseña,
      confirmar_contrasena:confirmarContraseña
    });

    console.log('Usuario registrado con ID:', userRef.id);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario en Firebase:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
// Endpoint para manejar el inicio de sesión

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica que los campos email y contraseña no sean undefined
    if (!email || !password) {
      res.status(400).json({ error: 'El correo electrónico y la contraseña son obligatorios' });
      return;
    }

    // Verifica las credenciales en la base de datos de Firebase
    const userSnapshot = await firebaseAdmin.firestore().collection('Usuarios').where('correo', '==', email).where('contrasena', '==', password).get();
    
    if (userSnapshot.empty) {
      // No se encontró ningún usuario con las credenciales proporcionadas
      res.status(401).json({ error: 'Credenciales inválidas' });
    } else {
      // Las credenciales son válidas, el inicio de sesión es exitoso
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
