import React from 'react';

import PagesInventory from './pages/inventory/index'

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>Dashboard</div>,
      main: () => <h2>Dashboard</h2>
    },
    {
      path: "/inventory",
      sidebar: () => <div>Inventory</div>,
      main: () => <PagesInventory />
    },
    {
      path: "/report",
      sidebar: () => <div>Reporting</div>,
      main: () => <h2>Reporting</h2>
    }
  ];

  export default routes