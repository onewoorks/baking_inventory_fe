import React from 'react'
import { Form, Input, Button, Select } from 'antd'

const ComponentInventorySupplier = () => {
    return (
        <Form layout="vertical">
            <Form.Item label="Supplier Name">
                <Input />
            </Form.Item>
            <Form.Item label="SSM No">
                <Select placeholder="Please select">
                </Select>
            </Form.Item>
            <Form.Item label="Contact No">
                <Input />
            </Form.Item>
            <Form.Item label="Email">
                <Input />
            </Form.Item>
            
            
            <Form.Item label="Address">
                <Input.TextArea rows={4} />
            </Form.Item>
            <Button type="primary">Register</Button>
        </Form>
    )
}

export default ComponentInventorySupplier
