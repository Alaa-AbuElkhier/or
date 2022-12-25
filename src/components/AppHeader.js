import React, { useState } from 'react';
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
  Carousel,
} from 'antd';
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

import logo from '../assets/logo.png';
import darkLogo from '../assets/darkLogo.png';
import footerbg from '../assets/footerbg.png';
import home3 from '../assets/home3.png';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

function AppHeader({ darkMode, setDarkMode }) {
  const items = [
    {
      label: (
        <a href='/about-us' rel='noopener noreferrer'>
          About Us
        </a>
      ),
      key: 'about-us',
    },
    {
      label: 'Services',
      key: 'contact-us',
      children: [
        {
          label: (
            <a href='/services-shopping' rel='noopener noreferrer'>
              Shopping
            </a>
          ),
        },
        {
          label: (
            <a href='/services-shopping' rel='noopener noreferrer'>
              Medical
            </a>
          ),
        },
      ],
    },
    {
      label: (
        <a href='/about-us' rel='noopener noreferrer'>
          Pricing
        </a>
      ),
      key: 'pricing',
    },
    {
      label: (
        <a href='/faq' rel='noopener noreferrer'>
          FAQ
        </a>
      ),
      key: 'FAQ',
    },
    {
      label: (
        <a href='/contact-us' rel='noopener noreferrer'>
          Contact Us
        </a>
      ),
      key: 'contact-us',
    },
    {
      label: (
        <a href='https://ant.design' rel='noopener noreferrer'>
          Flag
        </a>
      ),
      key: 'alipay',
    },
  ];

  return (
    <div>
      <div className='container'>
        <div className='logo'>
          {darkMode ? (
            <a href='/' rel='noopener noreferrer'>
              <img src={darkLogo} alt='Logo' />
            </a>
          ) : (
            <a href='/' rel='noopener noreferrer'>
              <img src={logo} alt='Logo' />
            </a>
          )}
        </div>
        <Row>
          <Col span={14}>
            {' '}
            <div className='nav-menu'>
              {darkMode ? (
                <Menu
                  style={{
                    backgroundColor: 'transparent',
                    color: '#978D8D',
                    borderColor: 'transparent',
                  }}
                  mode='horizontal'
                  defaultSelectedKeys={['2']}
                  items={items}
                />
              ) : (
                <Menu
                  style={{
                    backgroundColor: 'transparent',
                    color: '#978D8D',
                    borderColor: 'transparent',
                  }}
                  mode='horizontal'
                  defaultSelectedKeys={['2']}
                  items={items}
                />
              )}{' '}
            </div>
          </Col>{' '}
          <Col xs={0} sm={0} md={0} lg={2} xl={3}>
            <Switch
              checkedChildren='Dark'
              unCheckedChildren='Light'
              checked={darkMode}
              onChange={setDarkMode}
            />
          </Col>
          <Col xs={0} sm={0} md={0} lg={2} xl={3}>
            <div className='nav-buttons'>
              {' '}
              {darkMode ? (
                <Button
                  className='login'
                  style={{ color: '#63A3DC', fontWeight: 'bold' }}
                  type='text'>
                  {' '}
                  Log In
                </Button>
              ) : (
                <Button
                  className='login'
                  style={{ color: 'white', fontWeight: 'bold' }}
                  type='text'>
                  {' '}
                  Log In
                </Button>
              )}
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={2} xl={3}>
            <div className='nav-buttons'>
              {' '}
              <Button className='register' type='primary'>
                Register
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppHeader;
