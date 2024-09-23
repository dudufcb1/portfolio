import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Inicio from './Inicio'; // Asegúrate de que `Inicio` esté correctamente importado si es necesario
import ReactProjects from './ReactProjects';
import PhpMvc from './PhpMvc';
import Laravel from './Laravel';
import Wordpress from './Wordpress';
import Otros from './Otros';
import Contacto from './Contacto';

// Define las rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Usa el layout para la ruta base
    children: [
      {
        index: true, // Ruta por defecto para "/"
        element: <ReactProjects />,
      },
      {
        path: 'php-mvc', // Ruta para "/php-mvc"
        element: <PhpMvc />,
      },
      {
        path: 'laravel', // Ruta para "/php-mvc"
        element: <Laravel />,
      },
      {
        path: 'wordpress',
        element: <Wordpress />,
      },
      {
        path: 'otros',
        element: <Otros />,
      },
      {
        path: 'contactame',
        element: <Contacto />,
      },

      // Puedes añadir más rutas aquí si lo deseas
    ],
  },
]);

export default router;
