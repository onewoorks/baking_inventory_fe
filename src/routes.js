
import InventoryPurchaseOrder from './pages/inventory/PurchaseOrder'
import InventoryDeliveryOrder from './pages/inventory/DeliveryOrder'
import InventoryCategory from './pages/inventory/Category'
import InventoryProduct from './pages/inventory/Product'
import InventoryCheckout from './pages/inventory/Checkout'
import InventorySupplier from './pages/inventory/Supplier'

const routes = [
    {
        path: '/inventory/purchase-order',
        exact: true,
        component: InventoryPurchaseOrder
    },
    {
        path: '/inventory/delivery-order',
        exact: true,
        component: InventoryDeliveryOrder
    },
    { 
        path: '/inventory/category',
        component: InventoryCategory
    },
    { 
        path: '/inventory/product',
        component: InventoryProduct
    },
    { 
        path: '/inventory/checkout',
        component: InventoryCheckout
    },
    { 
        path: '/inventory/supplier',
        component: InventorySupplier
    }
]

export default routes;
