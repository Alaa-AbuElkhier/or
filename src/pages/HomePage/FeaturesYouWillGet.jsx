import React from 'react';
import { Row, Col, Button, Typography, Card } from 'antd';

import featuresBg from '../../assets/featuresBg.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import logo from '../../assets/logo.png';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

function FeaturesYouWillGet() {
  const items = [
    {
      icon: icon1,
      title: '  User-Friendly Design',
      content:
        '  A user-friendly Orderitto website Is easy to navigate &  users Understands it easily. ',
    },
    {
      icon: icon2,
      title: '  Blog System',
      content:
        ' A blog is a name for an online publication that will include shorts posts and articles that... ',
    },
    {
      icon: icon3,
      title: '  Multiple Payment Options',
      content:
        '  There are more than payment method in orderitto is a way that customers...',
    },
    {
      icon: icon4,
      title: ' POS System',
      content:
        '  A POS system allows your business to accept payments from customers and... ',
    },
    {
      icon: icon5,
      title: ' Support System',
      content:
        '  Support System is used to assist customers of online stores with questions, problems... ',
    },
    {
      icon: icon6,
      title: 'Marketing System',
      content:
        ' Marketing System is practice of using promotional marketing tools... ',
    },
  ];
  return (
    <div
      style={{
        background: 'white',
        backgroundImage: `url(${featuresBg})`,
      }}>
      <Row
        style={{
          paddingBottom: '50px',
        }}
        justify={'center'}>
        <Typography.Title
          level={1}
          style={{
            color: 'black',
          }}>
          Features You Will Get
        </Typography.Title>
      </Row>
      <div className='container'>
        <Row
          justify={'center'}
          gutter={[16, 16]}
          style={{
            paddingBottom: '50px',
          }}>
          {items.map((item) => (
            <>
              {' '}
              <Col span={7}>
                <div className='site-card-border-less-wrapper'>
                  <Card
                    bordered={false}
                    style={{
                      width: 350,
                      background: '#E3E3E3',
                      color: 'black',
                    }}>
                    <Row align={'middle'}>
                      <Col span={6}>
                        <img src={item.icon} alt='icon1' />
                      </Col>

                      <Col>
                        {' '}
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>
                          {item.title}
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <p>{item.content}</p>
                    </Row>
                    <Row>
                      <Button
                        style={{
                          backgroundColor: 'transparent',
                          borderColor: 'black',
                        }}>
                        READ MORE
                      </Button>
                    </Row>
                  </Card>
                </div>
              </Col>
            </>
          ))}
        </Row>
        <Row justify={'center'}>
          <Button type='primary' size='large'>
            VIEW ALL FEATURES
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default FeaturesYouWillGet;
