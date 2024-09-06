import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/sidebar';
import './Layout.css';
import Header from '../Header/header';
import Login from '../Login/Login';

const Layout = () => {
  return (

      <div className="layout">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Outlet /> {/* Aquí se renderiza el contenido según la ruta */}
    </div>
      </div>
        </div>
  );
};

export default Layout;
/* <Foter/> va en el div entre Outlet y cierre
*/