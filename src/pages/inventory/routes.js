import React from 'react';

const inventoryRoutes = () => [
    {
        path: "/inventory/checkin",
        exact: true,
        main: () => <div>inventory</div>
    },
    {
        path: "/inventory/checkout",
        main: () => <h2>Reporting</h2>
    }
]

export default inventoryRoutes