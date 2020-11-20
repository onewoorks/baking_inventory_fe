import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout
const { SubMenu } = Menu
const LayoutSider = () => {
    return (
        <>
            <Sider>
                <div className="logo">SPE STOK REPORT</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <SubMenu key="inventory" title="Inventory">

                        <Menu.Item key="inventory-category">
                            <Link to={`/inventory/category`}>Category</Link>
                        </Menu.Item>

                        <Menu.Item key="inventory-product">
                            <Link to={`/inventory/checkin`}>Product Check In</Link>
                        </Menu.Item>
                        <Menu.Item key="inventory-checkout">
                            <Link to={`/inventory/checkout`}>Product Check Out </Link>
                        </Menu.Item>
                        <Menu.Item key="inventory-purchase-order">
                            <Link to={`/inventory/purchase-order`}>Purchase Order </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="report" title="Reports & Analysis">
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
