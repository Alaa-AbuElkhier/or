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

import logo from '../../assets/logo.png';
import home1 from '../../assets/home1.png';
import footerbg from '../../assets/footerbg.png';
import home3 from '../../assets/home3.png';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

function HomeSlider() {
  return (
    <section className='test'>
      <div className='home'>
        <Carousel>
          <div>
            {' '}
            <div className='header-shape'>
              <Row
                align={'middle'}
                style={{
                  background: 'black',
                  paddingTop: '150px',
                  borderBottomLeftRadius: '40%',
                }}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} align='middle'>
                  <Typography.Title
                    level={1}
                    style={{
                      margin: 0,
                      color: 'white',
                    }}>
                    A platform built for your <br />
                    Business
                  </Typography.Title>
                  <Paragraph
                    style={{
                      color: 'white',
                    }}>
                    Orderitto is a free-to-use platform that provides web and{' '}
                    <br />
                    mobile solutions for your business as well as Tech support
                    <br /> from the amazing team of Invasso Creative Solutions.
                  </Paragraph>
                  <Space size={'middle'}>
                    <Button
                      size='large'
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                      }}>
                      LERN MORE ABOUT ORDERITTO
                    </Button>
                    <Button size='large'>START NOW</Button>
                  </Space>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} align='middle'>
                  <img src={home1} alt='home1' />
                </Col>
              </Row>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default HomeSlider;
