import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/layout';
import Prestamo from './Prestamo/prestamo';
import Convert from './Conversor/convert';
import DineroDisp from './Cuentas/DineroDisp';
import HelpCenter from './Help/Helpcenter';
import Cuentas from './Cuentas/Cuentas';
/*import Login from './login/LoginPage';*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      /*{
        path: '/login',
        element: <Login />, // Página de inicio de sesión
      },*/
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