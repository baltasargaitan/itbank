import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import './Layout.css';

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
