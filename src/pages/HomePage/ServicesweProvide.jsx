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
import { useMediaQuery } from 'react-responsive';

import home4 from '../../assets/home4.png';
import home5 from '../../assets/home5.png';
import logo from '../../assets/logo.png';
import servicebg from '../../assets/servicebg.png';
import serviceBgRes from '../../assets/serviceBgRes.png';
import home4Res from '../../assets/home4Res.png';
import home5Res from '../../assets/home5Res.png';

import orderittobg from '../../assets/orderittobg.png';
const { Meta } = Card;
const { Paragraph, Text } = Typography;
function ServicesweProvide() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <>
      {isTabletOrMobile ? (
        <div
          style={{
            backgroundImage: `url(${serviceBgRes})`,
          }}>
          <div style={{ marginBottom: '50px' }}>
            <Row justify={'center'}>
              <Typography.Title
                level={2}
                style={{
                  color: 'black',
                }}>
                Services we Provide
              </Typography.Title>
            </Row>
            <Row justify={'center'}>
              <Card
                style={{
                  background: '#e3e3e3',
                  width: '90%',
                }}>
                <Row justify={'center'}>
                  <img
                    src={home4Res}
                    style={{
                      width: '95%',
                    }}
                    alt='home4Res'
                  />
                </Row>
                <Row>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                    }}
                    level={3}>
                    Shopping & Retail
                  </Typography.Title>
                </Row>
                <Row>
                  {' '}
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 20,
                      textAlign: 'left',
                    }}>
                    Orderitto helps you sell your merchandise to your customers
                    Online by providing a unique website and mobile application
                    for your business.
                  </Paragraph>{' '}
                </Row>
                <Row justify={'center'}>
                  {' '}
                  <Button size='large' type='primary'>
                    Start Now
                  </Button>
                </Row>
              </Card>
            </Row>
          </div>
          {/* Second Card */}
          <div>
            <Row justify={'center'}>
              <Card
                style={{
                  background: '#e3e3e3',
                  width: '90%',
                }}>
                <Row justify={'center'}>
                  <img
                    src={home5Res}
                    style={{
                      width: '95%',
                    }}
                    alt='home5Res'
                  />
                </Row>
                <Row>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                    }}
                    level={3}>
                    Medical Stores
                  </Typography.Title>
                </Row>
                <Row>
                  {' '}
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 20,
                      textAlign: 'left',
                    }}>
                    Orderitto helps authorized pharmacies sell prescribtions
                    Online by providing a website and mobile application for you
                    business aswell as a 24/7 technical support.
                  </Paragraph>{' '}
                </Row>
                <Row justify={'center'}>
                  {' '}
                  <Button size='large' type='primary'>
                    Start Now
                  </Button>
                </Row>
              </Card>
            </Row>
          </div>
        </div>
      ) : (
        <div
          style={{
            // background: 'white',
            backgroundImage: `url(${servicebg})`,
          }}>
          <Row
            style={{
              marginTop: '20px',
            }}
            justify={'center'}>
            <Typography.Title
              level={1}
              style={{
                color: 'black',
              }}>
              Services we Provide
            </Typography.Title>
          </Row>
          <Row
            justify={'center'}
            style={{
              marginTop: '30px',
            }}>
            <Card
              style={{
                background: '#e3e3e3',
                width: '80%',
              }}>
              <Row justify={'start'}>
                <Col span={12}>
                  <img
                    src={home4}
                    style={{
                      width: '80%',
                    }}
                    alt='home4'
                  />
                </Col>
                <Col span={12}>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                    }}
                    level={3}>
                    Shopping & Retail
                  </Typography.Title>
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 20,
                      textAlign: 'left',
                    }}>
                    Orderitto helps you sell your merchandise to
                    <br /> your customers Online by providing a unique
                    <br /> website and mobile application for your
                    <br /> business.
                  </Paragraph>{' '}
                  <Row>
                    {' '}
                    <Button size='large' type='primary'>
                      Start Now
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row
            justify={'center'}
            style={{
              marginTop: '30px',
              marginBottom: '30px',
            }}>
            <Card
              style={{
                width: '80%',
                background: '#e3e3e3',
              }}>
              <Row>
                <Col span={12} push={2}>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                    }}
                    level={3}>
                    Medical Stores
                  </Typography.Title>
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 20,
                      textAlign: 'left',
                    }}>
                    Orderitto helps authorized pharmacies sell
                    <br /> prescribtions Online by providing a website and
                    <br /> mobile application for you business aswell as a{' '}
                    <br />
                    24/7 technical support.
                  </Paragraph>
                  <Row>
                    <Button size='large' type='primary'>
                      Start Now
                    </Button>
                  </Row>
                </Col>
                <Col
                  pull={1}
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                  }}>
                  <img
                    src={home5}
                    style={{
                      width: '80%',
                    }}
                    alt='home5'
                  />
                </Col>
              </Row>
            </Card>
          </Row>
          <Row>
            <div
              style={{
                background: 'black',
                backgroundImage: `url(${orderittobg})`,
                width: '100%',
              }}>
              <Row align={'middle'}>
                {' '}
                <Col span={2}>
                  {' '}
                  <img
                    src={logo}
                    style={{
                      width: '90%',
                      marginTop: '-16px',
                      marginLeft: '48px',
                    }}
                    alt='logo'
                  />
                </Col>
                <Col span={14}>
                  {' '}
                  <Typography.Title
                    level={2}
                    style={{
                      color: 'white',
                    }}>
                    is the fastest & easiest way to build the best online store
                    in the MENA region
                  </Typography.Title>
                </Col>
                <Col align={'middle'}>
                  <Button type='primary'>START NOW</Button>
                </Col>
              </Row>
            </div>
          </Row>
        </div>
      )}
    </>
  );
}

export default ServicesweProvide;
