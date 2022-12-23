import React from 'react';
import { Row, Col, Typography, Carousel } from 'antd';

import { useMediaQuery } from 'react-responsive';

import manage from '../../assets/manage.png';
import manage2 from '../../assets/manage2.png';
import manageBgRes from '../../assets/manageBgRes.png';
import manageSlider1 from '../../assets/manageSlider1.png';
const { Paragraph } = Typography;
const contentStyle = {
  margin: 0,
  height: '160px',
  width: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function ManageYourLife({ darkMode }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  if (darkMode) {
    return (
      <>
        {isTabletOrMobile ? (
          <div
            style={{
              background: 'black',
              backgroundImage: `url(${manageBgRes})`,
            }}>
            <Row justify={'center'}>
              <img
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  width: '250px',
                  marginTop: '20px',
                }}
                src={manage2}
                alt='manage2 '
              />
            </Row>
            <Row justify={'center'}>
              <Typography.Title
                level={2}
                style={{
                  color: 'white',
                }}>
                Manage Your Platform
              </Typography.Title>
            </Row>
            <Carousel>
              <div>
                <Row justify={'center'}>
                  <img src={manageSlider1} alt='manageSlider1 ' />
                </Row>
                <Row justify={'center'}>
                  <Typography.Title
                    level={4}
                    style={{
                      color: 'white',
                    }}>
                    Make Money
                  </Typography.Title>
                </Row>
                <Row justify={'center'}>
                  <Paragraph
                    style={{
                      color: 'white',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '50px',
                    }}>
                    Start making money <br />
                    using Orderitto for FREE
                  </Paragraph>
                </Row>
              </div>
              <div>
                <Row justify={'center'}>
                  <img src={manageSlider1} alt='manageSlider1 ' />
                </Row>
                <Row justify={'center'}>
                  <Typography.Title
                    level={4}
                    style={{
                      color: 'white',
                    }}>
                    Make Money
                  </Typography.Title>
                </Row>
                <Row justify={'center'}>
                  <Paragraph
                    style={{
                      color: 'white',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '50px',
                    }}>
                    Start making money <br />
                    using Orderitto for FREE
                  </Paragraph>
                </Row>
              </div>
              <div>
                <Row justify={'center'}>
                  <img src={manageSlider1} alt='manageSlider1 ' />
                </Row>
                <Row justify={'center'}>
                  <Typography.Title
                    level={4}
                    style={{
                      color: 'white',
                    }}>
                    Make Money
                  </Typography.Title>
                </Row>
                <Row justify={'center'}>
                  <Paragraph
                    style={{
                      color: 'white',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '50px',
                    }}>
                    Start making money <br />
                    using Orderitto for FREE
                  </Paragraph>
                </Row>
              </div>
              <div>
                <Row justify={'center'}>
                  <img src={manageSlider1} alt='manageSlider1 ' />
                </Row>
                <Row justify={'center'}>
                  <Typography.Title
                    level={4}
                    style={{
                      color: 'white',
                    }}>
                    Make Money
                  </Typography.Title>
                </Row>
                <Row justify={'center'}>
                  <Paragraph
                    style={{
                      color: 'white',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '50px',
                    }}>
                    Start making money <br />
                    using Orderitto for FREE
                  </Paragraph>
                </Row>
              </div>
            </Carousel>
          </div>
        ) : (
          <div
            style={{
              background: '#303030',
            }}>
            <div
              style={{
                // background: 'white',
                backgroundImage: `url(${manage})`,
              }}>
              <div className='background'>
                {' '}
                {/* <img src={home2} alt='home2' /> */}
              </div>
              <div className='content'>
                <Row>
                  <Col span={10} align={'middle'}>
                    <img
                      style={{
                        display: 'flex',
                        justifyContent: 'end',
                        height: '400px',
                        marginTop: '100px',
                      }}
                      src={manage2}
                      alt='manage2 '
                    />
                  </Col>
                  <Col
                    span={14}
                    style={{
                      marginTop: '100px',
                    }}>
                    <Typography.Title
                      level={1}
                      style={{
                        color: 'white',
                      }}>
                      Manage Your Platform
                    </Typography.Title>
                  </Col>
                </Row>
              </div>
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
            background: 'black',
            backgroundImage: `url(${manageBgRes})`,
          }}>
          <Row justify={'center'}>
            <img
              style={{
                display: 'flex',
                justifyContent: 'end',
                width: '250px',
                marginTop: '20px',
              }}
              src={manage2}
              alt='manage2 '
            />
          </Row>
          <Row justify={'center'}>
            <Typography.Title
              level={2}
              style={{
                color: 'white',
              }}>
              Manage Your Platform
            </Typography.Title>
          </Row>
          <Carousel>
            <div>
              <Row justify={'center'}>
                <img src={manageSlider1} alt='manageSlider1 ' />
              </Row>
              <Row justify={'center'}>
                <Typography.Title
                  level={4}
                  style={{
                    color: 'white',
                  }}>
                  Make Money
                </Typography.Title>
              </Row>
              <Row justify={'center'}>
                <Paragraph
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '50px',
                  }}>
                  Start making money <br />
                  using Orderitto for FREE
                </Paragraph>
              </Row>
            </div>
            <div>
              <Row justify={'center'}>
                <img src={manageSlider1} alt='manageSlider1 ' />
              </Row>
              <Row justify={'center'}>
                <Typography.Title
                  level={4}
                  style={{
                    color: 'white',
                  }}>
                  Make Money
                </Typography.Title>
              </Row>
              <Row justify={'center'}>
                <Paragraph
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '50px',
                  }}>
                  Start making money <br />
                  using Orderitto for FREE
                </Paragraph>
              </Row>
            </div>
            <div>
              <Row justify={'center'}>
                <img src={manageSlider1} alt='manageSlider1 ' />
              </Row>
              <Row justify={'center'}>
                <Typography.Title
                  level={4}
                  style={{
                    color: 'white',
                  }}>
                  Make Money
                </Typography.Title>
              </Row>
              <Row justify={'center'}>
                <Paragraph
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '50px',
                  }}>
                  Start making money <br />
                  using Orderitto for FREE
                </Paragraph>
              </Row>
            </div>
            <div>
              <Row justify={'center'}>
                <img src={manageSlider1} alt='manageSlider1 ' />
              </Row>
              <Row justify={'center'}>
                <Typography.Title
                  level={4}
                  style={{
                    color: 'white',
                  }}>
                  Make Money
                </Typography.Title>
              </Row>
              <Row justify={'center'}>
                <Paragraph
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '50px',
                  }}>
                  Start making money <br />
                  using Orderitto for FREE
                </Paragraph>
              </Row>
            </div>
          </Carousel>
        </div>
      ) : (
        <div
          style={{
            background: 'black',
          }}>
          <div
            style={{
              // background: 'white',
              backgroundImage: `url(${manage})`,
            }}>
            <div className='background'>
              {' '}
              {/* <img src={home2} alt='home2' /> */}
            </div>
            <div className='content'>
              <Row>
                <Col span={10} align={'middle'}>
                  <img
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      height: '400px',
                      marginTop: '100px',
                    }}
                    src={manage2}
                    alt='manage2 '
                  />
                </Col>
                <Col
                  span={14}
                  style={{
                    marginTop: '100px',
                  }}>
                  <Typography.Title
                    level={1}
                    style={{
                      color: 'white',
                    }}>
                    Manage Your Platform
                  </Typography.Title>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ManageYourLife;
