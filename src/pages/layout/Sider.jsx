import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout
const { SubMenu } = Menu
const LayoutSider = () => {
    return (
        <>
            <Sider>
                <div className="logo">BAKING INVENTORY</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="dashboard">Dashboard</Menu.Item>
                    <SubMenu key="inventori" title="Inventory">
                        <Menu.Item key="inventory_purchase_order">
                            <Link to="/inventory/purchase-order">
                               PO/DO
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="inventory_category">
                            <Link to="/inventory/category">Category</Link>
                        </Menu.Item>
                        <Menu.Item key="inventory_product">
                            <Link to="/inventory/product">Products</Link>
                        </Menu.Item>
                        <Menu.Item key="inventory_checkout">
                            <Link to="/inventory/checkout">Checkout</Link>
                        </Menu.Item>
                        <Menu.Item key="inventory_supplier">
                            <Link to="/inventory/supplier">Supplier</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="report" title="Reports">
                        <Menu.Item key="report_track">
                            Inventory Tracker
                        </Menu.Item>
                        <Menu.Item key="report_2">Report 2</Menu.Item>
                        <Menu.Item key="report_3">Report 3</Menu.Item>
                    </SubMenu>
                    <SubMenu key="cake_profile" title="Cake Profile">
                        <Menu.Item key="cake_profile_list">
                            List of cakes
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="setting" title="Setting">
                        <Menu.Item key="setting_user_management">
                            User Management
                        </Menu.Item>
                        <Menu.Item key="setting_user_group">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    )
}

export default LayoutSider
