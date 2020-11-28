import React from 'react';
import { Drawer, Card, Table, Button} from 'antd'

import ComponentAddNewProduct from '../../components/inventory/AddNewProduct'

const InventoryProduct = () => {
    const [drawerVisible, setDrawerVisible] = React.useState(false)
    const columns = [
        { title: 'No'},
        { title: "Category"},
        { title: "Name"},
        { title: "Unit"},
        { title: "Item on Hand"},
        { title: "Action"}
    ]
    return (
        <Card title="Current Product in Database">
            <Button type="primary" onClick={()=>setDrawerVisible(true)}>Add New Product</Button>
            <Table columns={columns} size="small" bordered/>
            <Drawer placement="right"
            title="Product Info"
            width="400"
            onClose={()=>setDrawerVisible(false)}
            visible={drawerVisible} >
                <ComponentAddNewProduct />
            </Drawer>
        </Card>
    )
}

export default InventoryProduct