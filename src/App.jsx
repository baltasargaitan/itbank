
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import Prestamo from './prestamo';
import Transferencias from './Transferencias';
import Cuentas from './Cuentas';
import Login from './Login';
import Convert from './convert';

import DineroDisp from './DineroDisp';
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
        element: <Transferencias />,
      },
      {
        path: '/cuentas',
        element: <Cuentas />,
      },
      {
        path: '/convertidor',
        element: <Convert />,
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

