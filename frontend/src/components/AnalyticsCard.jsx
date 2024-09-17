import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const AnalyticsCard = ({ title, sector, topic, insight, country, region, intensity, relevance, likelihood }) => {
  return (
    <Card
      hoverable
      style={{ marginBottom: 16, borderRadius: 8 }}
      bodyStyle={{ padding: 24 }}
    >
      <Title level={4}>{title}</Title>
      <Text strong>Sector:</Text> <Text>{sector}</Text><br />
      <Text strong>Topic:</Text> <Text>{topic}</Text><br />
      <Text strong>Insight:</Text> <Text>{insight}</Text><br />
      <Text strong>Country:</Text> <Text>{country}</Text><br />
      <Text strong>Region:</Text> <Text>{region}</Text><br />
      <div style={{ marginTop: 16 }}>
        <Text strong>Intensity:</Text> <Text>{intensity}</Text><br />
        <Text strong>Relevance:</Text> <Text>{relevance}</Text><br />
        <Text strong>Likelihood:</Text> <Text>{likelihood}</Text>
      </div>
    </Card>
  );
};

export default AnalyticsCard;
