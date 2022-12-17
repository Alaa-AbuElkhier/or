import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

import logo from '../assets/logo.png';

import footerbg from '../assets/footerbg.png';

const { Footer } = Layout;
const { Text } = Typography;

function AppFooter() {
  return (
    <div>
      {' '}
      <div className='container'>
        {' '}
        <Row>
          <Col span={2}>
            {' '}
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>{' '}
          </Col>
        </Row>
        <Row>
          {/* Products */}
          <Col span={6} push={3}>
            <Text
              style={{
                color: 'white',
              }}>
              Products{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Sand Stone{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Stone{' '}
            </Text>{' '}
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Cement{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Soft Stone{' '}
            </Text>
          </Col>
          {/* Services */}
          <Col span={6} push={3}>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Services{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Measurement Service{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Product Advice{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Interior Design{' '}
            </Text>
          </Col>
          {/* Contact information */}
          <Col span={6} push={3}>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Contact information{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              An Nuzhah, Riyadh 12474,{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Saudi Arabia{' '}
            </Text>
          </Col>
          {/* Social Media */}
          <Col span={6} push={3}>
            <Text
              style={{
                color: 'white',
                display: 'block',
              }}>
              Social Media{' '}
            </Text>
            <FacebookOutlined
              style={{
                color: 'white',
                fontSize: 24,
                marginRight: 10,
              }}
            />
            <TwitterOutlined
              style={{
                color: 'white',
                fontSize: 24,
                marginRight: 10,
              }}
            />
            <InstagramOutlined
              style={{
                color: 'white',
                fontSize: 24,
                marginRight: 10,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Text
            style={{
              color: 'white',
              display: 'block',
            }}>
            Copyright © 2022 | All Rights Reserved.{' '}
          </Text>
        </Row>
      </div>
    </div>
  );
}

export default AppFooter;
