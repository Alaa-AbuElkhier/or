import React from 'react';
import {
  Layout,
  Menu,
  theme,
  Row,
  Col,
  Button,
  Switch,
  Typography,
  Space,
  Card,
  Avatar,
} from 'antd';

import featuresBg from '../../assets/featuresBg.png';
import home6 from '../../assets/home6.png';

const { Paragraph, Text } = Typography;

function LifetimeUpdates() {
  return (
    <div style={{ backgroundColor: 'white', paddingTop: '50px' }}>
      <Row
        style={{
          marginTop: '20px',
          paddingBottom: '50px',
        }}
        justify={'center'}>
        <Col span={12}>
          {' '}
          <Typography.Title
            level={1}
            style={{
              color: 'black',
            }}>
            Lifetime Updates
          </Typography.Title>
          <Paragraph
            style={{
              color: '#5A7184',
              fontSize: 20,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua. Ut enim ad minim veniams
          </Paragraph>
          <Button type='primary' size='large'>
            Join +10,000 Clients
          </Button>
        </Col>
        <Col span={12}>
          <img src={home6} alt='home6' />
        </Col>
      </Row>
    </div>
  );
}

export default LifetimeUpdates;
