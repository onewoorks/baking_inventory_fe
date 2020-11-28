import React from 'react'
import { Drawer, Card, Table, Button } from 'antd'
import ComponentInventorySupplier from '../../components/inventory/Supplier'

const InventorySupplier = () => {
    const [drawerVisible, setDrawerVisible] = React.useState(false)
    const columns = [
        { title: 'Supplier Name' },
        { title: 'Contact No' },
        { title: 'Email' },
        { title: 'Action' },
    ]
    return (
        <Card title="List of Suppliers">
            <Button type="primary" onClick={() => setDrawerVisible(true)}>
                Add New Supplier
            </Button>
            <Table columns={columns} bordered size="small" />
            <Drawer
                title="Supplier Information"
                visible={drawerVisible}
                onClose={() => setDrawerVisible(false)}
                width="400"
            >
                <ComponentInventorySupplier />
            </Drawer>
        </Card>
    )
}

export default InventorySupplier
