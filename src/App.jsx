import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import Prestamo from './prestamo';
import Cuentas from './Cuentas';
import Login from './LoginPage';
import Convert from './convert';
import DineroDisp from './DineroDisp';
import HelpCenter from './Helpcenter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />, // Página de inicio de sesión
      },
      {
        path: '/prestamos',
        element: <Prestamo />,
      },
      {
        path: '/transferencias', 
        element: <DineroDisp />, // Usar DineroDisp en lugar de Transferencias
      },
      {
        path: '/cuentas',
        element: <Cuentas />,
      },
      {
        path: '/convertidor',
        element: <Convert />,
      },
      {
        path: '/helpcenter',
        element: <HelpCenter/>
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;


