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
} from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import '../../styles/responsive.css';
import pricingBg from '../../assets/images/pricing/pricingBg.png';
import checkIcon from '../../assets/images/pricing/checkIcon.png';
import ourPricingBg from '../../assets/ourPricingBg.png';
import featuresBg from '../../assets/featuresBg.png';
import Vector from '../../assets/svg/Vector.svg';
import vector2 from '../../assets/images/pricing/vector2.svg';
import vector3 from '../../assets/images/pricing/vector3.svg';
import vector4 from '../../assets/images/pricing/vector4.svg';
import vector5 from '../../assets/images/pricing/vector5.svg';

const { Paragraph, Text } = Typography;

function PricingPage({ setThemes, darkMode }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  setThemes('dark');
  const items = [
    {
      title: ' Blog System',
      icon: checkIcon,
    },
    {
      title: ' Support System',
      icon: checkIcon,
    },
    {
      title: ' POS System',
      icon: checkIcon,
    },
    {
      title: ' Marketing System',
      icon: checkIcon,
    },
    {
      title: ' Multiple Payment Options',
      icon: checkIcon,
    },
    {
      title: ' Reports',
      icon: checkIcon,
    },
  ];

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
      {/* Switch Part */}
      {/* <Row justify={'center'}>
        <Switch
          checkedChildren='Monthly'
          unCheckedChildren='Annually'
          defaultChecked
          style={{
            marginTop: '50px',
          }}
        />
      </Row> */}
      <Row justify={'center'}>
        <Col span={6}>
          {/* First Card 100$ */}
          <Row justify={'center'}>
            {' '}
            <div
              style={{
                marginTop: '300px',
                background: 'white',
                width: '392px',
                height: '600px',
              }}>
              <Row justify={'end'}>
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 600,
                    marginTop: '30px',
                    marginRight: '15px',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 600,
                    }}>
                    STARTER
                  </Text>{' '}
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 700,

                      display: 'block',
                    }}>
                    PACKAGE
                  </Text>{' '}
                </div>

                <img
                  src={vector4}
                  alt=''
                  style={{
                    position: 'absolute',
                  }}
                />

                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 60,
                    fontWeight: 750,
                    color: '#63A3DC',
                    zIndex: 1,
                    marginRight: '245px',
                    marginTop: '45px',
                  }}>
                  $100
                </Text>
              </Row>
              {/* Second Part */}
              <Row justify={'center'}>
                <div
                  style={{
                    paddingBottom: '20px',
                    marginTop: '200px',
                  }}>
                  {items.map((item) => (
                    <>
                      <Row
                        style={{
                          paddingBottom: '20px',
                          //   marginTop: '200px',
                        }}>
                        <Col>
                          {' '}
                          <img
                            src={item.icon}
                            alt=''
                            style={{ paddingRight: '10px' }}
                          />
                        </Col>
                        <Col>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 650,
                            }}>
                            {item.title}
                          </Text>
                        </Col>
                      </Row>
                    </>
                  ))}
                </div>
              </Row>
              <Row
                justify={'center'}
                style={{
                  paddingBottom: '20px',
                }}>
                <Button
                  href='/pricing-plan'
                  style={{
                    backgroundColor: 'transparent',
                    color: '#63A3DC',
                    borderColor: '#63A3DC',
                    width: '200px',
                    fontWeight: '650',
                  }}
                  size='large'>
                  GET STARTED
                </Button>
              </Row>
            </div>
          </Row>
        </Col>
        <Col span={6}>
          {' '}
          {/* Second Card  120$*/}
          <Row justify={'center'}>
            {' '}
            <div
              style={{
                marginTop: '200px',
                background: 'white',
                width: '392px',
                height: '600px',
              }}>
              <Row justify={'end'}>
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 600,
                    marginTop: '30px',
                    marginRight: '15px',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 600,
                    }}>
                    BUSINESS
                  </Text>{' '}
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 700,

                      display: 'block',
                    }}>
                    PACKAGE
                  </Text>{' '}
                </div>

                <img
                  src={Vector}
                  alt=''
                  style={{
                    position: 'absolute',
                  }}
                />

                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 60,
                    fontWeight: 750,
                    color: '#63A3DC',
                    zIndex: 1,
                    marginRight: '245px',
                    marginTop: '45px',
                  }}>
                  $120
                </Text>
              </Row>
              {/* Second Part */}
              <Row justify={'center'}>
                <div
                  style={{
                    paddingBottom: '20px',
                    marginTop: '200px',
                  }}>
                  {items.map((item) => (
                    <>
                      <Row
                        style={{
                          paddingBottom: '20px',
                          //   marginTop: '200px',
                        }}>
                        <Col>
                          {' '}
                          <img
                            src={item.icon}
                            alt=''
                            style={{ paddingRight: '10px' }}
                          />
                        </Col>
                        <Col>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 650,
                            }}>
                            {item.title}
                          </Text>
                        </Col>
                      </Row>
                    </>
                  ))}
                </div>
                <img
                  src={vector2}
                  alt=''
                  style={{
                    position: 'absolute',
                    marginRight: '336px',
                    marginTop: '466px',
                  }}
                />
                <img
                  src={vector3}
                  alt=''
                  style={{
                    position: 'absolute',
                    marginLeft: '347px',
                    marginTop: '434px',
                  }}
                />
              </Row>
              <Row
                justify={'center'}
                style={{
                  paddingBottom: '20px',
                }}>
                <Button
                  style={{
                    backgroundColor: '#63A3DC',
                    color: 'white',
                    width: '200px',
                  }}
                  size='large'>
                  GET STARTED
                </Button>
              </Row>
            </div>
          </Row>
        </Col>

        <Col span={6}>
          {' '}
          {/* Third Card  150$*/}
          <Row justify={'center'}>
            {' '}
            <div
              style={{
                marginTop: '300px',
                background: 'white',
                width: '392px',
                height: '600px',
                borderRadius: '10px',
              }}>
              <Row justify={'end'}>
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 600,
                    marginTop: '30px',
                    marginRight: '15px',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 600,
                      marginRight: '255px',
                    }}>
                    PLATINUM
                  </Text>{' '}
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 700,
                      marginRight: '250px',

                      display: 'block',
                    }}>
                    PACKAGE
                  </Text>{' '}
                </div>

                <img
                  src={vector5}
                  alt=''
                  style={{
                    position: 'absolute',
                  }}
                />

                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 60,
                    fontWeight: 750,
                    color: '#63A3DC',
                    zIndex: 1,
                    marginRight: '13px',
                    marginTop: '90px',
                  }}>
                  $150
                </Text>
              </Row>
              {/* Second Part */}
              <Row justify={'center'}>
                <div
                  style={{
                    paddingBottom: '20px',
                    marginTop: '200px',
                  }}>
                  {items.map((item) => (
                    <>
                      <Row
                        style={{
                          paddingBottom: '20px',
                          //   marginTop: '200px',
                        }}>
                        <Col>
                          {' '}
                          <img
                            src={item.icon}
                            alt=''
                            style={{ paddingRight: '10px' }}
                          />
                        </Col>
                        <Col>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 650,
                            }}>
                            {item.title}
                          </Text>
                        </Col>
                      </Row>
                    </>
                  ))}
                </div>
              </Row>
              <Row
                justify={'center'}
                style={{
                  paddingBottom: '20px',
                }}>
                <Button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#63A3DC',
                    borderColor: '#63A3DC',
                    width: '200px',
                    fontWeight: '650',
                  }}
                  size='large'>
                  GET STARTED
                </Button>
              </Row>
            </div>
          </Row>
        </Col>
      </Row>
      <Row justify={'center'} style={{ marginTop: '100px' }}>
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
      {/* <div
        style={{
          backgroundColor: '#F3F3F3',
          color: 'black',
          width: '100%',
          height: '500px',
        }}></div> */}
    </div>
  );
}

export default PricingPage;
