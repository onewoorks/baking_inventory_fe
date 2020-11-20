import React from 'react';
import { Card, Table } from 'antd'

const InventoryRecords = () => {
    const [dataSource, setDataSource] = React.useState([])

    const columns = [
        {title:'Product Name'},
        {title: 'Remaining Quantity'},
        {title: 'Supplier'},
        {title: 'Action'}
    ]

    return (
        <>
            <Card>
                <Table dataSource={dataSource} columns={columns} bordered/>
            </Card>
        </>
    )
}

export default InventoryRecords;