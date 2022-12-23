import React from 'react';
import { Row, Col, Button, Typography, Card } from 'antd';
import { useMediaQuery } from 'react-responsive';

import featuresBg from '../../assets/featuresBg.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import darkIcon1 from '../../assets/darkIcon1.png';
import darkIcon2 from '../../assets/darkIcon2.png';
import darkIcon3 from '../../assets/darkIcon3.png';
import darkIcon4 from '../../assets/darkIcon4.png';
import darkIcon5 from '../../assets/darkIcon5.png';
import darkIcon6 from '../../assets/darkIcon6.png';

import featuresBgRes from '../../assets/featuresBgRes.png';
import logo from '../../assets/logo.png';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

function FeaturesYouWillGet({ darkMode }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
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
  const darkItems = [
    {
      icon: darkIcon1,
      title: '  User-Friendly Design',
      content:
        '  A user-friendly Orderitto website Is easy to navigate &  users Understands it easily. ',
    },
    {
      icon: darkIcon2,
      title: '  Blog System',
      content:
        ' A blog is a name for an online publication that will include shorts posts and articles that... ',
    },
    {
      icon: darkIcon3,
      title: '  Multiple Payment Options',
      content:
        '  There are more than payment method in orderitto is a way that customers...',
    },
    {
      icon: darkIcon4,
      title: ' POS System',
      content:
        '  A POS system allows your business to accept payments from customers and... ',
    },
    {
      icon: darkIcon5,
      title: ' Support System',
      content:
        '  Support System is used to assist customers of online stores with questions, problems... ',
    },
    {
      icon: darkIcon6,
      title: 'Marketing System',
      content:
        ' Marketing System is practice of using promotional marketing tools... ',
    },
  ];
  if (darkMode) {
    return (
      <>
        {isTabletOrMobile ? (
          <div
            style={{
              background: 'transparent',
              backgroundImage: `url(${featuresBgRes})`,
            }}>
            <Row
              style={{
                paddingBottom: '50px',
              }}
              justify={'center'}>
              <Typography.Title
                level={2}
                style={{
                  color: 'black',
                }}>
                Features You Will Get
              </Typography.Title>
            </Row>
            <div className='container'>
              {items.map((item) => (
                <>
                  {' '}
                  <Row
                    justify={'center'}
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <div className='site-card-border-less-wrapper'>
                      <Card
                        bordered={false}
                        style={{
                          width: 350,
                          background: '#E3E3E3',
                          color: 'black',
                          borderRadius: '20px',
                        }}>
                        <Row align={'middle'}>
                          <Col span={6}>
                            <img src={item.icon} alt='icon1' />
                          </Col>

                          <Col>
                            {' '}
                            <Text
                              style={{ color: 'black', fontWeight: 'bold' }}>
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
                  </Row>
                </>
              ))}

              <Row justify={'center'} style={{ marginBottom: '50px' }}>
                <Button type='primary' size='large'>
                  VIEW ALL FEATURES
                </Button>
              </Row>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: 'transparent',
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
                  color: 'white',
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
                {darkItems.map((item) => (
                  <>
                    {' '}
                    <Col span={7}>
                      <div className='site-card-border-less-wrapper'>
                        <Card
                          bordered={false}
                          style={{
                            width: 350,
                            background: '#303030',
                            color: '#AEAEAE ',
                          }}>
                          <Row align={'middle'}>
                            <Col span={6}>
                              <img src={item.icon} alt='icon1' />
                            </Col>

                            <Col>
                              {' '}
                              <Text
                                style={{ color: 'white', fontWeight: 'bold' }}>
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
                                borderColor: 'white',
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
              <Row justify={'center'} style={{ marginBottom: '50px' }}>
                <Button
                  type='primary'
                  size='large'
                  style={{
                    backgroundColor: 'white ',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  VIEW ALL FEATURES
                </Button>
              </Row>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {isTabletOrMobile ? (
        <div
          style={{
            background: 'transparent',
            backgroundImage: `url(${featuresBgRes})`,
          }}>
          <Row
            style={{
              paddingBottom: '50px',
            }}
            justify={'center'}>
            <Typography.Title
              level={2}
              style={{
                color: 'black',
              }}>
              Features You Will Get
            </Typography.Title>
          </Row>
          <div className='container'>
            {items.map((item) => (
              <>
                {' '}
                <Row
                  justify={'center'}
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <div className='site-card-border-less-wrapper'>
                    <Card
                      bordered={false}
                      style={{
                        width: 350,
                        background: '#E3E3E3',
                        color: 'black',
                        borderRadius: '20px',
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
                </Row>
              </>
            ))}

            <Row justify={'center'} style={{ marginBottom: '50px' }}>
              <Button type='primary' size='large'>
                VIEW ALL FEATURES
              </Button>
            </Row>
          </div>
        </div>
      ) : (
        <div
          style={{
            background: 'transparent',
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
                            <Text
                              style={{ color: 'black', fontWeight: 'bold' }}>
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
            <Row justify={'center'} style={{ marginBottom: '50px' }}>
              <Button type='primary' size='large'>
                VIEW ALL FEATURES
              </Button>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default FeaturesYouWillGet;
