import React from 'react';
import { Layout, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }}>
            <Input placeholder="Search..." style={{ width: 200 }} />
            <Avatar icon={<UserOutlined />} />
        </Header>
    );
};

export default AppHeader;
