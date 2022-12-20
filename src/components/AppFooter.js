import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

import logo from '../assets/logo.png';

import footerbg from '../assets/footerbg.png';

const { Footer } = Layout;
const { Text } = Typography;

function AppFooter() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <>
      {isTabletOrMobile ? (
        <div>
          <Row justify={'start'}>
            <img src={logo} alt='Logo' style={{ width: '130px' }} />
          </Row>
          <div>
            {' '}
            <Row justify={'center'} style={{ marginTop: '40px' }}>
              <Text style={{ color: 'white', fontSize: '16px' }}>Products</Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Text style={{ color: 'white' }}>Sand Stone</Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Text style={{ color: '#AEAEAE' }}>Stone</Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Text style={{ color: '#AEAEAE' }}>Cement</Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Text style={{ color: '#AEAEAE' }}>Soft Stone</Text>
            </Row>
          </div>
          <div>
            {' '}
            <Row justify={'center'} style={{ marginTop: '40px' }}>
              <Text style={{ color: 'white', fontSize: '16px' }}>Services</Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Text style={{ color: '#AEAEAE' }}>Measurement Service</Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Text style={{ color: '#AEAEAE' }}>Product Advice</Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Text style={{ color: '#AEAEAE' }}>Interior Design</Text>
            </Row>
          </div>
          <div>
            {' '}
            <Row justify={'center'} style={{ marginTop: '40px' }}>
              <Text style={{ color: 'white', fontSize: '16px' }}>
                Contact information
              </Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '3px' }}>
              <Text style={{ color: '#AEAEAE' }}>
                3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, <br /> An Nuzhah,
                Riyadh 12474, Saudi Arabia{' '}
              </Text>
            </Row>
          </div>
          <div>
            {' '}
            <Row justify={'center'} style={{ marginTop: '40px' }}>
              <Text style={{ color: 'white', fontSize: '16px' }}>
                Social Media
              </Text>
            </Row>
            <Row justify={'center'} style={{ marginTop: '20px' }}>
              <Col>
                <FacebookOutlined
                  style={{
                    color: 'white',
                    fontSize: 24,
                    marginRight: 10,
                  }}
                />
              </Col>
              <Col>
                {' '}
                <TwitterOutlined
                  style={{
                    color: 'white',
                    fontSize: 24,
                    marginRight: 10,
                  }}
                />
              </Col>
              <Col>
                {' '}
                <InstagramOutlined
                  style={{
                    color: 'white',
                    fontSize: 24,
                    marginRight: 10,
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
      ) : (
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
              <Col span={6}>
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
              <Col span={6}>
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
              <Col span={6}>
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
              <Col span={6}>
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
      )}
    </>
  );
}

export default AppFooter;
