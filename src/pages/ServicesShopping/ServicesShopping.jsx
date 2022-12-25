import React from 'react';
import { Layout, Row, Col, Button, Typography, Card } from 'antd';

import { useMediaQuery } from 'react-responsive';

import servicesSoppingBg from '../../assets/images/services/servicesSoppingBg.png';
import cardImg from '../../assets/images/services/cardImg.png';
import service1 from '../../assets/images/services/service1.png';
import service2 from '../../assets/images/services/service2.png';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

function ServicesShopping() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <>
      {isTabletOrMobile ? (
        <div>
          {' '}
          {/* First Section */}
          <div
            style={{
              backgroundImage: `url(${servicesSoppingBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '500px',
            }}>
            <Row justify={'center'}>
              <Typography.Title
                level={3}
                style={{
                  color: 'black',
                  marginTop: '160px',
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}>
                One Click Away from Creating <br />
                your business store
              </Typography.Title>
              <Col span={22}>
                <Paragraph
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    //   fontSize: 20,
                  }}>
                  Orderitto is a <b>free-to-use </b> platform that provides web
                  and mobile solutions for your business as well as Tech support{' '}
                  <b>Tech support</b> from the amazing team of Invasso Creative
                  Solutions.
                </Paragraph>
              </Col>
            </Row>
            <Row justify={'center'}>
              <Button
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#FF4693',
                  marginRight: '20px',
                }}
                size='middle'>
                Check the Demo Version
              </Button>
              <Button
                style={{ backgroundColor: '#FF4693', color: 'white' }}
                size='middle'>
                Register Now
              </Button>
            </Row>
          </div>
          {/* Second Section  */}
          <div
            style={{
              marginBottom: '100px',
            }}>
            <Row justify={'center'}>
              <Card
                style={{
                  background: '#e3e3e3',
                  width: '300px',
                  height: '400px',
                }}>
                <Row justify={'center'}>
                  <img
                    src={cardImg}
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
                      fontWeight: 'bold',
                    }}
                    level={4}>
                    Personalized Services
                  </Typography.Title>
                </Row>
                <Row>
                  {' '}
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 16,
                      textAlign: 'left',
                    }}>
                    We offer you business a unique plan that changes and grows
                    with you, from full implementation to strategic advisory and
                    program management.
                  </Paragraph>{' '}
                </Row>
              </Card>
            </Row>
            <Row
              style={{
                marginTop: '30px',
              }}
              justify={'center'}>
              <Card
                style={{
                  background: '#e3e3e3',
                  width: '300px',
                  height: '229px',
                }}>
                <Row>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                      fontWeight: 'bold',
                    }}
                    level={4}>
                    Personalized Services
                  </Typography.Title>
                </Row>
                <Row>
                  {' '}
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 16,
                      textAlign: 'left',
                    }}>
                    We offer you business a unique plan that changes and grows
                    with you, from full implementation to strategic advisory and
                    program management.
                  </Paragraph>{' '}
                </Row>
              </Card>
            </Row>
            <Row
              style={{
                marginTop: '30px',
              }}
              justify={'center'}>
              <Card
                style={{
                  background: '#e3e3e3',
                  width: '300px',
                  height: '229px',
                }}>
                <Row>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                      fontWeight: 'bold',
                    }}
                    level={4}>
                    Free Website
                  </Typography.Title>
                </Row>
                <Row>
                  {' '}
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 16,
                      textAlign: 'left',
                    }}>
                    As soon as you register with Orderitto, you will get your
                    free website which will be ready to use as soon as you fill
                    the data in.
                  </Paragraph>{' '}
                </Row>
              </Card>
            </Row>
            <Row
              style={{
                marginTop: '30px',
              }}
              justify={'center'}>
              <Card
                style={{
                  background: '#e3e3e3',
                  width: '300px',
                  height: '229px',
                }}>
                <Row>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                      fontWeight: 'bold',
                    }}
                    level={4}>
                    Professional Team
                  </Typography.Title>
                </Row>
                <Row>
                  {' '}
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 16,
                      textAlign: 'left',
                    }}>
                    Our diverse team, from data scientists to industry experts,
                    across finance, retail, hospitality and technology, has
                    decades of industry expertise.
                  </Paragraph>{' '}
                </Row>
              </Card>
            </Row>
            <Row
              style={{
                marginTop: '30px',
              }}
              justify={'center'}>
              <Card
                style={{
                  background: '#e3e3e3',
                  width: '300px',
                  height: '229px',
                }}>
                <Row>
                  <Typography.Title
                    style={{
                      textAlign: 'left',
                      fontWeight: 'bold',
                    }}
                    level={4}>
                    Expertise
                  </Typography.Title>
                </Row>
                <Row>
                  {' '}
                  <Paragraph
                    style={{
                      color: 'black',
                      fontSize: 16,
                      textAlign: 'left',
                    }}>
                    Our best practices and proven methods will set you up to
                    continuously innovate and improve as your business thrive
                    and is well-established.
                  </Paragraph>{' '}
                </Row>
              </Card>
            </Row>
          </div>
          {/* Third Section */}
          <div>
            <Row justify={'center'}>
              <Col>
                <img
                  src={service2}
                  style={{
                    width: '300px',
                  }}
                  alt='home4Res'
                />
              </Col>
            </Row>
            <Row justify={'center'}>
              <Typography.Title
                level={3}
                style={{
                  color: 'black',
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}>
                Our Premium Plan Benefits
              </Typography.Title>
            </Row>
            <Row justify={'center'}>
              <Col span={20}>
                <Paragraph
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    //   fontSize: 24,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Paragraph>
              </Col>
            </Row>
            <Row justify={'center'}>
              <img
                src={service1}
                style={{
                  width: ' 400px',
                }}
                alt='service1'
              />
            </Row>
          </div>
          {/* Fourth Section */}
          <div>
            <Row justify={'center'}>
              <Col span={22}>
                <Text
                  style={{
                    color: '#FF4693',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  Create your own e-commerce website and mobile app and start
                  selling online now!
                </Text>
              </Col>
            </Row>
            <Row justify={'center'}>
              {' '}
              <Col span={20}>
                <Paragraph
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: 600,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Paragraph>
              </Col>
            </Row>

            <Row justify={'center'}>
              <Col span={20}>
                {' '}
                <Paragraph
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: 14,
                  }}>
                  Fill in your details below, and we"ll contact you as soon as
                  possible to launch your e-commerce
                  <br /> website.
                </Paragraph>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <div>
          {' '}
          {/* First Section */}
          <div
            style={{
              backgroundImage: `url(${servicesSoppingBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '1050px',
            }}>
            <Row>
              <Col
                push={3}
                style={{
                  marginTop: '200px',
                }}>
                <Row>
                  <Typography.Title
                    level={1}
                    style={{
                      color: 'black',
                      marginTop: '160px',
                      marginRight: '80px',
                      textAlign: 'left',
                      fontWeight: 'bold',
                    }}>
                    One Click Away from Creating <br /> your business store
                  </Typography.Title>
                </Row>
                <Row>
                  <Paragraph
                    style={{
                      color: 'black',
                      textAlign: 'left',
                      fontSize: 20,
                    }}>
                    Orderitto is a <b>free-to-use </b> platform that provides
                    web and <br /> mobile solutions for your business as well as
                    Tech support <b>Tech support</b> <br /> from the amazing
                    team of Invasso Creative Solutions.
                  </Paragraph>
                </Row>
                <Row>
                  <Button
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: '#FF4693',
                      marginRight: '20px',
                    }}
                    size='large'>
                    Check the Demo Version
                  </Button>
                  <Button
                    style={{ backgroundColor: '#FF4693', color: 'white' }}
                    size='large'>
                    Register Now
                  </Button>
                </Row>
              </Col>
            </Row>
          </div>
          {/* Second Section  */}
          <div style={{ marginTop: '150px' }}>
            <Row justify={'center'}>
              <Col style={{ marginRight: '30px' }}>
                <Row justify={'center'}>
                  <Card
                    style={{
                      background: '#e3e3e3',
                      width: '400px',
                      height: '482px',
                    }}>
                    <Row justify={'center'}>
                      <img
                        src={cardImg}
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
                          fontWeight: 'bold',
                        }}
                        level={4}>
                        Personalized Services
                      </Typography.Title>
                    </Row>
                    <Row>
                      {' '}
                      <Paragraph
                        style={{
                          color: 'black',
                          fontSize: 16,
                          textAlign: 'left',
                        }}>
                        We offer you business a unique plan that changes and
                        grows with you, from full implementation to strategic
                        advisory and program management.
                      </Paragraph>{' '}
                    </Row>
                  </Card>
                </Row>
              </Col>

              <Col style={{ marginRight: '30px' }}>
                <Row justify={'center'} style={{ marginBottom: '20px' }}>
                  <Card
                    style={{
                      background: '#e3e3e3',
                      width: '400px',
                      height: '229px',
                    }}>
                    <Row>
                      <Typography.Title
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                        }}
                        level={4}>
                        Personalized Services
                      </Typography.Title>
                    </Row>
                    <Row>
                      {' '}
                      <Paragraph
                        style={{
                          color: 'black',
                          fontSize: 16,
                          textAlign: 'left',
                        }}>
                        We offer you business a unique plan that changes and
                        grows with you, from full implementation to strategic
                        advisory and program management.
                      </Paragraph>{' '}
                    </Row>
                  </Card>
                </Row>
                <Row justify={'center'}>
                  <Card
                    style={{
                      background: '#e3e3e3',
                      width: '400px',
                      height: '229px',
                    }}>
                    <Row>
                      <Typography.Title
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                        }}
                        level={4}>
                        Free Website
                      </Typography.Title>
                    </Row>
                    <Row>
                      {' '}
                      <Paragraph
                        style={{
                          color: 'black',
                          fontSize: 16,
                          textAlign: 'left',
                        }}>
                        As soon as you register with Orderitto, you will get
                        your free website which will be ready to use as soon as
                        you fill the data in.
                      </Paragraph>{' '}
                    </Row>
                  </Card>
                </Row>
              </Col>
              <Col>
                {' '}
                <Row justify={'center'} style={{ marginBottom: '20px' }}>
                  <Card
                    style={{
                      background: '#e3e3e3',
                      width: '400px',
                      height: '229px',
                    }}>
                    <Row>
                      <Typography.Title
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                        }}
                        level={4}>
                        Professional Team
                      </Typography.Title>
                    </Row>
                    <Row>
                      {' '}
                      <Paragraph
                        style={{
                          color: 'black',
                          fontSize: 16,
                          textAlign: 'left',
                        }}>
                        Our diverse team, from data scientists to industry
                        experts, across finance, retail, hospitality and
                        technology, has decades of industry expertise.
                      </Paragraph>{' '}
                    </Row>
                  </Card>
                </Row>
                <Row justify={'center'}>
                  <Card
                    style={{
                      background: '#e3e3e3',
                      width: '400px',
                      height: '229px',
                    }}>
                    <Row>
                      <Typography.Title
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                        }}
                        level={4}>
                        Expertise
                      </Typography.Title>
                    </Row>
                    <Row>
                      {' '}
                      <Paragraph
                        style={{
                          color: 'black',
                          fontSize: 16,
                          textAlign: 'left',
                        }}>
                        Our best practices and proven methods will set you up to
                        continuously innovate and improve as your business
                        thrive and is well-established.
                      </Paragraph>{' '}
                    </Row>
                  </Card>
                </Row>
              </Col>
            </Row>
          </div>
          {/* Third Section */}
          <div style={{ marginTop: '150px' }}>
            <Row>
              <Col span={12}>
                <img
                  src={service2}
                  style={{
                    width: '90%',
                  }}
                  alt='home4Res'
                />
              </Col>
              <Col span={12}>
                <Row align={'middle'}>
                  <Typography.Title
                    level={1}
                    style={{
                      color: 'black',

                      textAlign: 'left',
                      fontWeight: 'bold',
                    }}>
                    Our Premium Plan Benefits
                  </Typography.Title>
                </Row>
                <Row>
                  <Paragraph
                    style={{
                      color: 'black',
                      textAlign: 'left',
                      fontSize: 24,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and <br />{' '}
                    typesetting industry. Lorem Ipsum has been the
                    <br /> industry's standard dummy text ever since the 1500s,{' '}
                    <br />
                    when an unknown printer took a galley of type and <br />{' '}
                    scrambled it to make a type specimen book.
                  </Paragraph>
                </Row>
                <Row>
                  <img
                    src={service1}
                    style={{
                      width: ' 1139px',
                    }}
                    alt='service1'
                  />
                </Row>
              </Col>
            </Row>
          </div>
          {/* Fourth Section */}
          <div style={{ marginBottom: '100px' }}>
            <Row justify={'center'}>
              <Col span={18}>
                {' '}
                <Row justify={'center'}>
                  <Text
                    style={{
                      color: '#FF4693',
                      textAlign: 'left',
                      fontWeight: 'bold',
                      fontSize: 50,
                    }}>
                    Create your own e-commerce website and mobile app <br />
                    and start selling online now!
                  </Text>
                </Row>
                <Row justify={'center'}>
                  <Paragraph
                    style={{
                      color: 'black',
                      textAlign: 'left',
                      fontSize: 27,
                      fontWeight: 600,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has <br /> been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley <br />
                    of type and scrambled it to make a type specimen book.
                  </Paragraph>
                  <Paragraph
                    style={{
                      color: 'black',
                      textAlign: 'left',
                      fontSize: 30,
                    }}>
                    Fill in your details below, and we"ll contact you as soon as
                    possible to launch your e-commerce
                    <br /> website.
                  </Paragraph>{' '}
                </Row>
                <Row>
                  {' '}
                  <Button
                    size='large'
                    href='/contact-us'
                    style={{
                      backgroundColor: '#FF4693',
                      display: 'flex',
                      justifyContent: 'left',
                      marginLeft: '220px',
                      color: 'white',
                      borderColor: '#FF4693',
                      fontSize: 18,
                      //   padding: ' 25px 25px 25px 25px ',
                      //   width: '200px',
                    }}>
                    CONTACT US NOW
                  </Button>
                </Row>
              </Col>{' '}
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default ServicesShopping;
