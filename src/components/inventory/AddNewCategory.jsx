import React from 'react'
import {Form, Input, Button, Select } from 'antd'

const ComponentInventoryAddNewCategory = (props) => {
    const [form] = Form.useForm()
    let listCategory = props.listCategory
    let button_mode = 'add_new'
    if (props.editData !== null){
        let edit = props.editData
        button_mode = 'edit'
        form.setFieldsValue({
            category_name: edit.nama_kategori,
            parent_id: 0
        })
    } else {
        form.setFieldsValue({
            category_name: ''
        })
    }

    const ButtonType = (in_props) => {
        if (in_props.mode === 'add_new'){
            return <Button type="primary">Register</Button>
        } else {
            return <Button type="primary">Edit</Button>
        }
        
    }
    return (
        <Form
            layout='vertical'
            form={form}
        >
            <Form.Item
                label="Category Name"
                name="category_name"
            >
                <Input />
            </Form.Item>
            <Form.Item label="Parent Category" name="parent_id">
                <Select placeholder="Please select">
                    <Select.Option value={0}>None</Select.Option>
                    { listCategory.map((category, key)=> <Select.Option key={key+1} value={category.id}>{category.nama_kategori}</Select.Option>)}
                </Select>
            </Form.Item>
            <ButtonType mode={button_mode} />
        </Form>
    )
}

export default ComponentInventoryAddNewCategory