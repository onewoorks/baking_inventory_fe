import React from 'react'
import { Layout, Menu } from 'antd'

const { Sider } = Layout
const { SubMenu } = Menu
const LayoutSider = () => {
    return (
        <>
            <Sider>
                <div className="logo">SPE STOK REPORT</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <SubMenu key="inventori" title="Inventory">
                        <Menu.Item key="3">Category</Menu.Item>
                        <Menu.Item key="4">Product</Menu.Item>
                        <Menu.Item key="5">Check Out</Menu.Item>
                    </SubMenu>
                    <SubMenu key="report" title="Reports">
                        <Menu.Item key="3">Report 1</Menu.Item>
                        <Menu.Item key="4">Report 2</Menu.Item>
                        <Menu.Item key="5">Report 3</Menu.Item>
                    </SubMenu>
                    <SubMenu key="setting" title="Setting">
                        <Menu.Item key="6">User Management</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    )
}

export default LayoutSider
