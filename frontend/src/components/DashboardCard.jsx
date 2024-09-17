import React from 'react';
import { Card } from 'antd';

const DashboardCard = ({ title, value, icon }) => {
    return (
        <Card
            hoverable
            style={{ width: 300, marginBottom: '20px' }}
            cover={icon}
        >
            <Card.Meta title={title} description={value} />
        </Card>
    );
};

export default DashboardCard;
