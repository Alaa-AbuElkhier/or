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
  Carousel,
} from 'antd';
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

import logo from '../assets/logo.png';
import home1 from '../assets/home1.png';
import footerbg from '../assets/footerbg.png';
import home3 from '../assets/home3.png';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

function AppHeader() {
  const items = [
    {
      label: 'About Us',
      key: 'mail',
    },
    {
      label: 'Services',
      key: 'app',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: 'Pricing',
      key: 'SubMenu',
    },
    {
      label: 'FAQ',
      key: 'SubMenu',
    },
    {
      label: 'Contact Us',
      key: 'SubMenu',
    },
    {
      label: (
        <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
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
          <img src={logo} alt='Logo' />
        </div>
        <Row>
          <Col span={14}>
            {' '}
            <div className='nav-menu'>
              {' '}
              <Menu
                theme='dark'
                mode='horizontal'
                defaultSelectedKeys={['2']}
                items={items}
              />
            </div>
          </Col>{' '}
          <Col xs={0} sm={0} md={0} lg={2} xl={3}>
            <Switch checkedChildren='Dark' unCheckedChildren='Light' />
          </Col>
          <Col xs={0} sm={0} md={0} lg={2} xl={3}>
            <div className='nav-buttons'>
              {' '}
              <Button className='login' style={{ color: 'white' }} type='text'>
                {' '}
                Log In
              </Button>
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
