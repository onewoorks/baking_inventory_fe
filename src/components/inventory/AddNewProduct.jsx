import React from 'react'
import { Form, Input, Button, Select } from 'antd'

const ComponentAddNewProduct = () => {
    return (
        <Form layout="vertical">
            <Form.Item label="Invoice No">
                <Input />
            </Form.Item>
            <Form.Item label="Supplier">
                <Select placeholder="Please select">
                </Select>
            </Form.Item>
            <Form.Item label="Category">
                <Select placeholder="Please select">
                    <Select.Option value="gram">Gram</Select.Option>
                    <Select.Option value="mililiter">mililiter</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="SKU (Barcode)">
                <Input />
            </Form.Item>
            <Form.Item label="Product Name">
                <Input />
            </Form.Item>
            
            
            <Form.Item label="Price">
                <Input />
            </Form.Item>
            <Button type="primary">Register</Button>
        </Form>
    )
}

export default ComponentAddNewProduct
