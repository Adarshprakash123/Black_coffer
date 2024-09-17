import React, { useState, useEffect } from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import { DashboardOutlined, BarChartOutlined, FilterOutlined, SettingOutlined } from '@ant-design/icons';
import IntensityChart from './components/Charts/IntensityChart';
import axios from 'axios'; // We'll use axios to fetch data from the backend

const { Header, Content, Sider } = Layout;

const App = () => {
  const [chartData, setChartData] = useState([]); // State to hold the data

  // Fetch the data from your backend on component mount
  useEffect(() => {
    // Replace with the correct API endpoint of your backend
    axios.get('http://localhost:5000/api/data') 
      .then((response) => {
        setChartData(response.data); // Set the fetched data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            Data Visualization
          </Menu.Item>
          <Menu.Item key="3" icon={<FilterOutlined />}>
            Filters
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Content */}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <h2 style={{ textAlign: 'center' }}>Data Visualization Dashboard</h2>
        </Header>
        <Content style={{ margin: '16px' }}>
          {/* Overview Cards */}
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Overall Intensity" bordered={false}>
                <p>Intensity: {chartData.length > 0 ? chartData[0].intensity : '-'}</p>
                <p>Region: {chartData.length > 0 ? chartData[0].region : '-'}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Overall Relevance" bordered={false}>
                <p>Relevance: {chartData.length > 0 ? chartData[0].relevance : '-'}</p>
                <p>Country: {chartData.length > 0 ? chartData[0].country : '-'}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Likelihood" bordered={false}>
                <p>Likelihood: {chartData.length > 0 ? chartData[0].likelihood : '-'}</p>
                <p>Topic: {chartData.length > 0 ? chartData[0].topic : '-'}</p>
              </Card>
            </Col>
          </Row>

          {/* Charts */}
          <Row gutter={16} style={{ marginTop: '16px' }}>
            <Col span={24}>
              <Card title="Intensity Visualization">
                {/* Pass the fetched data to the chart */}
                <IntensityChart data={chartData} />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
