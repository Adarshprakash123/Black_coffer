import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined, BarChartOutlined, LineChartOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return (
        <Menu
            style={{ width: 256, height: '100vh' }}
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
        >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<BarChartOutlined />}>
                Analytics
            </Menu.Item>
            <Menu.Item key="3" icon={<LineChartOutlined />}>
                Reports
            </Menu.Item>
        </Menu>
    );
};

export default Sidebar;
