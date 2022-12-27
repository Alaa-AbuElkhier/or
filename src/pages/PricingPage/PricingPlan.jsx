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
  Carousel,
  Table,
  Tag,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import pricingBg from '../../assets/images/pricing/pricingBg.png';
const { Paragraph, Text } = Typography;
const columns = [
  {
    title: 'PRICING PLANS',
    dataIndex: 'plan',
    key: 'plan',
    render: (text) => (
      <>
        <Text>{text}</Text>{' '}
        <Tag style={{ marginLeft: '10px', borderRadius: '50px' }}>soon</Tag>
      </>
    ),
  },
  {
    title: 'Free',
    dataIndex: 'free',
    key: 'free',
  },
  {
    title: 'Starter',
    dataIndex: 'starter',
    key: 'starter',
  },
  {
    title: 'Business',
    dataIndex: 'business',
    key: 'business',
  },
  {
    title: 'Platinum',
    dataIndex: 'platinum',
    key: 'platinum',
  },
];
const data = [
  {
    key: '1',
    plan: 'Video upload',
    free: 'Up to 3 per month',
    starter: 'Up to 10 per month',
    business: 'Unlimited',

    tags: 'soon',
  },
  {
    key: '2',
    plan: 'Asset storage',
    free: 'Up to 5 GB',
    starter: 'Up to 10 GB',
    business: 'Unlimited',
  },

  {
    key: '3',
    plan: 'Access to stock image library',
    free: <CheckOutlined />,
    starter: <CheckOutlined />,
    business: <CheckOutlined />,

    tags: 'soon',
  },

  {
    key: '4',
    plan: 'Access to stock sound library',
    free: <CheckOutlined />,
    starter: <CheckOutlined />,
    business: <CheckOutlined />,
  },

  {
    key: '5',
    plan: 'Custom Fonts',
    free: 'Selection of 30 Fonts',
    starter: <CheckOutlined />,
    business: <CheckOutlined />,
  },
  {
    key: '6',
    plan: 'Logo variants',
    free: 'Up to 2',
    starter: 'Unlimited',
    business: 'Unlimited',
  },

  {
    key: '7',
    plan: 'Colors',
    free: 'Up to 5',
    starter: 'Unlimited',
    business: 'Unlimited',
  },

  {
    key: '8',
    plan: 'Logo outro',
    free: 'Static only',
    starter: 'Selection of 5 motions ',
    business: 'Custom / LottieFile import',
  },
];

function PricingPlan({ setThemes }) {
  setThemes('dark');
  return (
    <div
      style={{
        backgroundImage: `url(${pricingBg})`,
        paddingBottom: '50px',
      }}>
      <Row justify={'center'}>
        <Typography.Title
          level={1}
          style={{
            color: 'black',
            marginTop: '150px',
          }}>
          GET STARTED NOW
        </Typography.Title>
      </Row>
      <Row justify={'center'}>
        <Typography.Title
          level={1}
          style={{
            color: 'black',
            marginTop: '10px',
          }}>
          PICK A PLAN LATER
        </Typography.Title>
      </Row>
      <Row justify={'center'}>
        <Paragraph
          style={{
            color: 'black',
            fontSize: 16,
            marginBottom: 0,
          }}>
          Orderitto is a free-to-use platform that provides web and mobile
          solutions for your business as well as Tech support from
          <br /> the amazing team of Invasso Creative Solutions.
        </Paragraph>
      </Row>
      <Row justify={'center'}>
        {' '}
        <Table
          style={{ marginTop: '50px', width: '70%' }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Row>
      <Row justify={'center'} style={{ marginTop: '50px' }}>
        {' '}
        <Button
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            borderColor: '#63A3DC',
            width: '250px',
            fontWeight: '650',
            marginRight: 20,
          }}
          size='large'>
          Check the Demo Version
        </Button>
        <Button
          style={{
            backgroundColor: '#63A3DC',
            color: 'white',

            width: '250px',
            fontWeight: '650',
          }}
          size='large'>
          Check the Demo Version
        </Button>
      </Row>
    </div>
  );
}

export default PricingPlan;
