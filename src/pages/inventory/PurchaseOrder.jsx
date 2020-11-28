import React from 'react'
import { Drawer, Card, Button, Table} from 'antd'

const InventoryPurchaseOrder = () => {
    const [ drawerVisible, setDrawerVisible] = React.useState(false)
    const columns = [
        { title: "Purchase Order No"},
        { title: "Order Date"},
        { title: "Order Status"},
        { title: "Action"}
    ]
    return (
        <Card title="Purchase/Delivery Order">
            <Button type="primary" onClick={() => setDrawerVisible(true)}>Add New Purchase Order</Button>
            <Table columns={columns} bordered size="small" />
            <Drawer title="Purchase Order Information"
                visible={drawerVisible}
                onClose={()=> setDrawerVisible(false)}
                width={400}
            >

            </Drawer>
        </Card>
    )
}

export default InventoryPurchaseOrder