import React from 'react'
import { Card, Table, Button, Drawer, Spin } from 'antd'
import ComponentInventoryAddNewCategory from '../../components/inventory/AddNewCategory'
import axios from 'axios'

const InventoryCategory = () => {
    const [dataSource, setDataSource] = React.useState([])
    const [drawerVisible, setDrawerVisible] = React.useState(false)
    const [spinning, setSpinning] = React.useState(true)
    const [editData, setEditData ] = React.useState(null)
    const columns = [
        { title: 'No', dataIndex:'id'},
        { title: 'Category Name', dataIndex:'nama_kategori'},
        { title: 'Action', align: 'center', render: (record) => <Button size="small" onClick={() => {
            setDrawerVisible(true) 
            setEditData(record)
        }}>Edit</Button>}
    ]

    React.useEffect(()=>{
        axios.get('http://localhost:8000/ref/category')
        .then(response => {
            setDataSource(response.data)
            setSpinning(false)
        })
    },[])

    const addNewCategory = () => {
        setEditData(null)
        setDrawerVisible(true)
    }
    return (
        <Card title="Inventory Categories">
                <Button type="primary" onClick={addNewCategory}>Add New Category</Button>
                <Spin spinning={spinning} >
                <Table dataSource={dataSource} columns={columns} bordered size="small" />
                </Spin>
                <Drawer
                    title="Add New Category"
                    placement="right"
                    onClose={()=> setDrawerVisible(false)}
                    visible={drawerVisible}
                    width={400}
                >
                    <ComponentInventoryAddNewCategory listCategory={dataSource} editData={editData} />
                </Drawer>
        </Card>
    )
}

export default InventoryCategory