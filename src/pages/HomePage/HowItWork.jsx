import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

import home2 from '../../assets/home2.png';
import home3 from '../../assets/home3.png';
import howBgRes from '../../assets/howBgRes.png';
import Rectangle from '../../assets/svg/Rectangle.svg';

const { Paragraph } = Typography;

function HowItWork({ darkMode }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  if (darkMode) {
    return (
      <section className='section'>
        {isTabletOrMobile ? (
          //Responsive Design
          <div
            style={{
              backgroundImage: `url(${howBgRes})`,
            }}>
            <Row justify={'center'}>
              {' '}
              <Typography.Title
                level={1}
                style={{
                  color: 'black',
                }}>
                How it Works?
              </Typography.Title>
            </Row>
            <Row justify={'center'}>
              <Col>
                {' '}
                <img
                  style={{
                    width: '300px',

                    marginTop: '20px',
                  }}
                  src={home3}
                  alt='home3'
                />
              </Col>
            </Row>
            <Row
              justify={'center'}
              style={{
                marginTop: '20px',
              }}>
              <Paragraph
                style={{
                  color: 'black',

                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                Orderitto helps you create digital solutions for your
                <br /> business in the easiest way possible. With a couple of{' '}
                <br />
                clicks from your mouse, you will be able to get a<br /> website
                and mobile application along with a 24/7 <br />
                technical support for free. You don’t need a coding <br />
                background or even design skills to create your <br />
                solutions.
              </Paragraph>
            </Row>
            <Row
              justify={'center'}
              style={{
                marginTop: '20px',
                marginBottom: '20px',
              }}>
              <Button type='primary' size='middle'>
                START NOW
              </Button>
            </Row>
          </div>
        ) : (
          <div
            style={{
              background: '#111010',
            }}>
            <div
              style={{
                // background: 'white',
                backgroundImage: `url(${home2})`,
                height: '650px',
              }}>
              <div className='background'>
                {' '}
                {/* <img src={home2} alt='home2' /> */}
              </div>
              <div className='content'>
                <Row justify={'start'}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12} align={'middle'}>
                    <div className='rect'></div>
                    <img
                      style={{
                        display: 'flex',
                        justifyContent: 'end',
                        height: '400px',
                        marginTop: '100px',
                        position: 'absolute',
                        marginLeft: '220px',
                      }}
                      src={home3}
                      alt='home3'
                    />
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={12}
                    style={{
                      marginTop: '100px',
                    }}>
                    <Row justify={'start'}>
                      <Typography.Title
                        level={1}
                        style={{
                          color: 'white',
                        }}>
                        How it Works?
                      </Typography.Title>
                    </Row>
                    <Row justify={'start'}>
                      {' '}
                      <Paragraph
                        style={{
                          color: 'white',
                          fontSize: 20,
                          textAlign: 'left',
                          display: 'flex',
                          justifyContent: 'center',
                        }}>
                        Orderitto helps you create digital solutions for your
                        <br /> business in the easiest way possible. With a
                        couple of <br />
                        clicks from your mouse, you will be able to get a<br />{' '}
                        website and mobile application along with a 24/7 <br />
                        technical support for free. You don’t need a coding{' '}
                        <br />
                        background or even design skills to create your <br />
                        solutions.
                      </Paragraph>
                    </Row>

                    <Row justify={'start'}>
                      <Col>
                        {' '}
                        <Button
                          style={{
                            width: '170px',
                          }}
                          type='primary'
                          size='large'>
                          START NOW
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
  return (
    <section className='section'>
      {isTabletOrMobile ? (
        //Responsive Design
        <div
          style={{
            backgroundImage: `url(${howBgRes})`,
          }}>
          <Row justify={'center'}>
            {' '}
            <Typography.Title
              level={1}
              style={{
                color: 'black',
              }}>
              How it Works?
            </Typography.Title>
          </Row>
          <Row justify={'center'}>
            <Col>
              {' '}
              <img
                style={{
                  width: '300px',

                  marginTop: '20px',
                }}
                src={home3}
                alt='home3'
              />
            </Col>
          </Row>
          <Row
            justify={'center'}
            style={{
              marginTop: '20px',
            }}>
            <Paragraph
              style={{
                color: 'black',

                textAlign: 'left',
                display: 'flex',
                justifyContent: 'center',
              }}>
              Orderitto helps you create digital solutions for your
              <br /> business in the easiest way possible. With a couple of{' '}
              <br />
              clicks from your mouse, you will be able to get a<br /> website
              and mobile application along with a 24/7 <br />
              technical support for free. You don’t need a coding <br />
              background or even design skills to create your <br />
              solutions.
            </Paragraph>
          </Row>
          <Row
            justify={'center'}
            style={{
              marginTop: '20px',
              marginBottom: '20px',
            }}>
            <Button type='primary' size='middle'>
              START NOW
            </Button>
          </Row>
        </div>
      ) : (
        <div
          style={{
            background: 'white',
          }}>
          <div
            style={{
              // background: 'white',
              backgroundImage: `url(${home2})`,
              height: '650px',
            }}>
            <div className='background'>
              {' '}
              {/* <img src={home2} alt='home2' /> */}
            </div>
            <div className='content'>
              <Row justify={'start'}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} align={'middle'}>
                  <div className='rect'></div>
                  <img
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      height: '400px',
                      marginTop: '100px',
                      position: 'absolute',
                      marginLeft: '220px',
                    }}
                    src={home3}
                    alt='home3'
                  />
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={12}
                  xl={12}
                  style={{
                    marginTop: '100px',
                  }}>
                  <Row justify={'start'}>
                    <Typography.Title
                      level={1}
                      style={{
                        color: 'black',
                      }}>
                      How it Works?
                    </Typography.Title>
                  </Row>
                  <Row justify={'start'}>
                    {' '}
                    <Paragraph
                      style={{
                        color: 'black',
                        fontSize: 20,
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      Orderitto helps you create digital solutions for your
                      <br /> business in the easiest way possible. With a couple
                      of <br />
                      clicks from your mouse, you will be able to get a<br />{' '}
                      website and mobile application along with a 24/7 <br />
                      technical support for free. You don’t need a coding <br />
                      background or even design skills to create your <br />
                      solutions.
                    </Paragraph>
                  </Row>

                  <Row justify={'start'}>
                    <Col>
                      {' '}
                      <Button
                        style={{
                          width: '170px',
                        }}
                        type='primary'
                        size='large'>
                        START NOW
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HowItWork;
