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
import { useMediaQuery } from 'react-responsive';

import logo from '../../assets/logo.png';
import home1 from '../../assets/home1.png';
import footerbg from '../../assets/footerbg.png';
import home3 from '../../assets/home3.png';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

function HomeSlider({ darkMode }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  if (darkMode) {
    return (
      <>
        {isTabletOrMobile ? (
          <div>
            <Carousel>
              <div>
                <Row
                  style={{
                    background: 'black',
                    paddingTop: '150px',
                    borderBottomLeftRadius: '40%',
                  }}>
                  {' '}
                  <Row justify={'center'}>
                    {' '}
                    <Typography.Title
                      level={2}
                      style={{
                        margin: 0,
                        color: 'white',
                      }}>
                      A platform built for your <br />
                    </Typography.Title>
                  </Row>
                  <Row justify={'start'}>
                    {' '}
                    <Col span={8}>
                      <Typography.Title
                        level={2}
                        style={{
                          margin: 0,
                          color: 'white',
                        }}>
                        Business
                      </Typography.Title>
                    </Col>
                    <Col push={3}>
                      {' '}
                      <img
                        src={home1}
                        alt='home1'
                        style={{ width: '350px', marginTop: '-25px' }}
                      />
                    </Col>
                  </Row>
                </Row>
                <Row justify={'center'}>
                  {' '}
                  <p
                    style={{
                      color: 'black',
                      fontSize: 20,
                      textAlign: 'left',
                    }}>
                    {' '}
                    Orderitto is a{' '}
                    <span style={{ fontWeight: 'bold' }}>free-to-use</span>{' '}
                    platform <br /> that provides web and mobile <br />{' '}
                    solutions for your business as well <br /> as{' '}
                    <span style={{ fontWeight: 'bold' }}>Tech support </span>
                    from the amazing <br />
                    team of{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      Invasso Creative <br />
                      Solutions.
                    </span>
                  </p>
                </Row>
                <Row justify={'center'}>
                  <Col span={16}>
                    {' '}
                    <Button
                      size='large'
                      style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        fontSize: 14,
                        borderColor: 'black',
                      }}>
                      LERN MORE ABOUT ORDERITTO
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type='primary'
                      size='large'
                      style={{
                        color: 'white',
                        fontSize: 14,
                      }}>
                      START NOW
                    </Button>
                  </Col>
                </Row>
              </div>
            </Carousel>
          </div>
        ) : (
          <section className='test'>
            <div className='home'>
              <Carousel>
                <div>
                  {' '}
                  <div>
                    <Row
                      align={'middle'}
                      style={{
                        background: '#F3F3F3',
                        paddingTop: '150px',
                        borderBottomLeftRadius: '40%',
                      }}>
                      <div className='slide-curve'></div>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
                        align='middle'>
                        <Typography.Title
                          level={1}
                          style={{
                            margin: 0,
                            color: '#4883C1',
                          }}>
                          A platform built for your <br />
                          Business
                        </Typography.Title>
                        <Paragraph
                          style={{
                            color: '#616161',
                          }}>
                          Orderitto is a free-to-use platform that provides web
                          and <br />
                          mobile solutions for your business as well as Tech
                          support
                          <br /> from the amazing team of Invasso Creative
                          Solutions.
                        </Paragraph>
                        <Space size={'middle'}>
                          <Button
                            size='large'
                            style={{
                              backgroundColor: 'transparent',
                              color: '#63A3DC',
                              borderColor: '#63A3DC',
                            }}>
                            LERN MORE ABOUT ORDERITTO
                          </Button>
                          <Button
                            size='large'
                            style={{
                              backgroundColor: '#63A3DC',
                              color: 'white',
                              borderColor: '#63A3DC',
                            }}>
                            START NOW
                          </Button>
                        </Space>
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
                        align='middle'>
                        <img src={home1} alt='home1' />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Carousel>
            </div>
          </section>
        )}
      </>
    );
  }
  return (
    <>
      {isTabletOrMobile ? (
        <div>
          <Carousel>
            <div>
              <Row
                style={{
                  background: 'black',
                  paddingTop: '150px',
                  borderBottomLeftRadius: '40%',
                }}>
                {' '}
                <Row justify={'center'}>
                  {' '}
                  <Typography.Title
                    level={2}
                    style={{
                      margin: 0,
                      color: 'white',
                    }}>
                    A platform built for your <br />
                  </Typography.Title>
                </Row>
                <Row justify={'start'}>
                  {' '}
                  <Col span={8}>
                    <Typography.Title
                      level={2}
                      style={{
                        margin: 0,
                        color: 'white',
                      }}>
                      Business
                    </Typography.Title>
                  </Col>
                  <Col push={3}>
                    {' '}
                    <img
                      src={home1}
                      alt='home1'
                      style={{ width: '350px', marginTop: '-25px' }}
                    />
                  </Col>
                </Row>
              </Row>
              <Row justify={'center'}>
                {' '}
                <p
                  style={{
                    color: 'black',
                    fontSize: 20,
                    textAlign: 'left',
                  }}>
                  {' '}
                  Orderitto is a{' '}
                  <span style={{ fontWeight: 'bold' }}>free-to-use</span>{' '}
                  platform <br /> that provides web and mobile <br /> solutions
                  for your business as well <br /> as{' '}
                  <span style={{ fontWeight: 'bold' }}>Tech support </span>from
                  the amazing <br />
                  team of{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    Invasso Creative <br />
                    Solutions.
                  </span>
                </p>
              </Row>
              <Row justify={'center'}>
                <Col span={16}>
                  {' '}
                  <Button
                    size='large'
                    style={{
                      backgroundColor: 'transparent',
                      color: 'black',
                      fontSize: 14,
                      borderColor: 'black',
                    }}>
                    LERN MORE ABOUT ORDERITTO
                  </Button>
                </Col>
                <Col>
                  <Button
                    type='primary'
                    size='large'
                    style={{
                      color: 'white',
                      fontSize: 14,
                    }}>
                    START NOW
                  </Button>
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
      ) : (
        <section className='test'>
          <div className='home'>
            <Carousel>
              <div>
                {' '}
                <div>
                  <Row
                    align={'middle'}
                    style={{
                      background: 'black',
                      paddingTop: '200px',
                      borderBottomLeftRadius: '40%',
                    }}>
                    <div className='slide-curve'></div>
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
                        Orderitto is a free-to-use platform that provides web
                        and <br />
                        mobile solutions for your business as well as Tech
                        support
                        <br /> from the amazing team of Invasso Creative
                        Solutions.
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
      )}
    </>
  );
}

export default HomeSlider;
