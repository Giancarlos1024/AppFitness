// data.js

export const ExerciseImages = [
  { uri: require('./assets/yoga.jpg'), name: 'Yoga' },
  { uri: require('./assets/deportes.jpg'), name: 'Deportes ' },
  { uri: require('./assets/Hiit.jpg'), name: 'HIIT' },

  // Agrega más objetos según sea necesario
];

export const NutritionImages = [
  { uri: require('./assets/proteinas.jpg'), name: 'Proteínas' },
  { uri: require('./assets/hidratacion.jpg'), name: 'Hidratación' },
  { uri: require('./assets/vegetales.jpg'), name: 'Vegetales' },
  // Agrega más objetos según sea necesario
];



export const ExerciseSuggestionsData = {
  sentadillas: {
    image: require('./assets/Exercise_sentadillas.jpg'),
    description: '3 series de 12 repeticiones.\nExcelente ejercicio para fortalecer piernas y glúteos.',
  },
  plancha: {
    image: require('./assets/Exercise_plancha.png'),
    description: '3 series de 30 segundos.\nIdeal para fortalecer el core y mejorar la estabilidad del cuerpo.',
  },
  flexiones: {
    image: require('./assets/Exercise_flexiones.jpg'),
    description: '3 series de 10 repeticiones.\nGran ejercicio para fortalecer el pecho, hombros y tríceps.',
  },
  burpees: {
    image: require('./assets/Exercise_burpees.jpg'),
    description: '3 series de 10 repeticiones.\nExcelente ejercicio de cuerpo completo para mejorar la resistencia y fuerza.',
  },
  zancadas: {
    image: require('./assets/Exercise_zancadas.jpg'),
    description: '3 series de 10 repeticiones por pierna.\nIdeal para trabajar los glúteos y cuádriceps.',
  },
  abdominales: {
    image: require('./assets/Exercise_abdominales.jpg'),
    description: '3 series de 15 repeticiones.\nBuen ejercicio para fortalecer los músculos abdominales.',
  },
  jumpingJacks: {
    image: require('./assets/Exercise_jumpingjacks.jpg'),
    description: '3 series de 30 repeticiones.\nEjercicio cardiovascular que mejora la resistencia y quema calorías.',
  },
  fondosTriceps: {
    image: require('./assets/Exercise_fondostriceps.jpg'),
    description: '3 series de 12 repeticiones.\nExcelente ejercicio para fortalecer los tríceps.',
  },
  lunges: {
    image: require('./assets/Exercise_lunges.jpg'),
    description: '3 series de 10 repeticiones por pierna.\nTrabaja glúteos, cuádriceps y músculos estabilizadores.',
  },
  planchaLateral: {
    image: require('./assets/Exercise_planchalateral.jpg'),
    description: '3 series de 30 segundos por lado.\nFortalece el core y mejora la estabilidad lateral del cuerpo.',
  },
  // Puedes agregar más ejercicios siguiendo el mismo formato
};


export const NutritionRecommendationsData = {
  proteinas: {
    image: require('./assets/proteinas.jpg'),
    description: 'Incluye fuentes de proteínas en cada comida para ayudar a la reparación y crecimiento muscular.',
  },
  hidratacion: {
    image: require('./assets/hidratacion.jpg'),
    description: 'Bebe al menos 8 vasos de agua al día para mantener tu cuerpo hidratado y mejorar el rendimiento físico.',
  },
  vegetales: {
    image: require('./assets/vegetales.jpg'),
    description: 'Asegúrate de incluir una variedad de vegetales en tu dieta para obtener vitaminas y minerales esenciales.',
  },
  frutas: {
    image: require('./assets/Nutrition_frutas.jpg'),
    description: 'Come al menos 2-3 porciones de frutas frescas al día para obtener fibra y antioxidantes.',
  },
  grasasSaludables: {
    image: require('./assets/Nutrition_grasas_saludables.jpg'),
    description: 'Consume grasas saludables como aguacates, nueces y aceite de oliva para una salud cardiovascular óptima.',
  },
  carbohidratosComplejos: {
    image: require('./assets/Nutrition_carbohidratos_complejos.jpg'),
    description: 'Elige carbohidratos complejos como el arroz integral y la quinua para una energía sostenida y estable.',
  },
  pescadoGraso: {
    image: require('./assets/Nutrition_pescado_graso.jpg'),
    description: 'Incorpora pescado graso como el salmón y el atún en tu dieta para obtener ácidos grasos omega-3 beneficiosos para la salud cerebral y cardiovascular.',
  },
  calcio: {
    image: require('./assets/Nutrition_calcio.jpg'),
    description: 'Asegúrate de obtener suficiente calcio a través de alimentos como productos lácteos, tofu y verduras de hoja verde para mantener huesos y dientes fuertes.',
  },
  antioxidantes: {
    image: require('./assets/Nutrition_antioxidantes.jpg'),
    description: 'Consume alimentos ricos en antioxidantes como bayas, tomates y brócoli para combatir el daño causado por los radicales libres y promover una piel saludable.',
  },
  fibra: {
    image: require('./assets/Nutrition_fibra.jpg'),
    description: 'Incluye alimentos ricos en fibra como legumbres, granos enteros y frutas en tu dieta para mantener un sistema digestivo saludable y regular.',
  },
};










const exerciseData = {
  Lunes: [
    { nombre: 'Sentadillas', descripcion: '3 series de 12 repeticiones' },
    { nombre: 'Flexiones de brazos', descripcion: '3 series de 10 repeticiones' },
    { nombre: 'Desplantes', descripcion: '3 series de 10 repeticiones por pierna' },
    { nombre: 'Abdominales', descripcion: '3 series de 15 repeticiones' },
  ],
  Martes: [
    { nombre: 'Plancha', descripcion: '3 series de 30 segundos' },
    { nombre: 'Zancadas', descripcion: '3 series de 10 repeticiones por pierna' },
    { nombre: 'Saltos de cuerda', descripcion: '3 series de 50 saltos' },
    { nombre: 'Elevaciones laterales', descripcion: '3 series de 12 repeticiones' },
  ],
  Miércoles: [
    { nombre: 'Burpees', descripcion: '3 series de 10 repeticiones' },
    { nombre: 'Mountain climbers', descripcion: '3 series de 20 repeticiones' },
    { nombre: 'Fondos de tríceps', descripcion: '3 series de 12 repeticiones' },
    { nombre: 'Elevación de talones', descripcion: '3 series de 15 repeticiones' },
  ],
  Jueves: [
    { nombre: 'Flexiones diamante', descripcion: '3 series de 12 repeticiones' },
    { nombre: 'Pull-ups', descripcion: '3 series de 8 repeticiones' },
    { nombre: 'Elevaciones frontales', descripcion: '3 series de 12 repeticiones' },
    { nombre: 'Plancha lateral', descripcion: '3 series de 30 segundos por lado' },
  ],
  Viernes: [
    { nombre: 'Sentadillas con salto', descripcion: '3 series de 10 repeticiones' },
    { nombre: 'Fondos de pecho', descripcion: '3 series de 12 repeticiones' },
    { nombre: 'Crunches rusos', descripcion: '3 series de 15 repeticiones por lado' },
    { nombre: 'Estocadas inversas', descripcion: '3 series de 10 repeticiones por pierna' },
  ],
  Sábado: [
    { nombre: 'Elevaciones de rodillas', descripcion: '3 series de 15 repeticiones' },
    { nombre: 'Flexiones declinadas', descripcion: '3 series de 10 repeticiones' },
    { nombre: 'Curl de bíceps', descripcion: '3 series de 12 repeticiones' },
    { nombre: 'Elevaciones de talones sentado', descripcion: '3 series de 15 repeticiones' },
  ],
  Domingo: [
    { nombre: 'Descanso activo', descripcion: 'Realizar actividad ligera como caminar' },
    { nombre: 'Estiramientos', descripcion: 'Realizar una sesión de estiramientos suaves' },
    { nombre: 'Meditación', descripcion: 'Practicar técnicas de relajación y meditación' },
  ],
};

export default exerciseData;
