import React from 'react';
import { Row, Col, Button, Typography, Form, Input, Select } from 'antd';
import { useMediaQuery } from 'react-responsive';
import aboutUsBg from '../../assets/aboutUsBg.png';
// import aboutUs1 from '../../assets/aboutUs1.png';
import home3 from '../../assets/home3.png';
const { Option } = Select;
const { Paragraph } = Typography;

function AboutUs() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <>
      {isTabletOrMobile ? (
        <>
          {' '}
          <section
            style={{
              background: 'white',
            }}>
            <Row justify={'center'}>
              <Typography.Title
                level={3}
                style={{
                  color: 'black',
                  marginTop: '100px',
                  // marginRight: '80px',
                }}>
                Orderitto Helps You Build <br />A Successful Online Store
              </Typography.Title>
            </Row>
            <Row justify={'center'} style={{ marginTop: '30px' }}>
              {' '}
              <img
                src={aboutUsBg}
                style={{
                  width: '300px',
                }}
                alt='aboutUsBg'
              />
            </Row>
            <Row justify={'center'}>
              <ul style={{ fontSize: 13, textAlign: 'left' }}>
                <li style={{ marginBottom: 20 }}>
                  Orderitto has a specialized team that not only <br />
                  helps you build your online store, but guides <br />
                  you through your e-commerce journey to help <br /> you grow.
                </li>
                <li style={{ marginBottom: 20 }}>
                  Orderitto platform doesn’t require any <br />
                  technical expertise and offers payment and
                  <br /> shipment integrations.
                </li>
                <li style={{ marginBottom: 20 }}>
                  It’s totally <b>free, NO</b> trial periods or anything.
                </li>
              </ul>
            </Row>
          </section>
          <section
            style={{
              background: 'white',
            }}>
            <Row justify={'center'}>
              <Typography.Title
                level={3}
                style={{
                  color: 'black',
                  textAlign: 'left',

                  // marginRight: '80px',
                }}>
                Our Mission is to Help Your <br />
                Business Thrive
              </Typography.Title>
            </Row>
            <Row justify={'center'} style={{ marginTop: '30px' }}>
              {' '}
              <img
                src={home3}
                style={{
                  width: '300px',
                }}
                alt='home3'
              />
            </Row>
            <Row justify={'center'}>
              <Paragraph style={{ fontSize: 13, textAlign: 'left' }}>
                With Orderitto, you can easily create an online store
                <br /> that has amazing features such as promotions, custom{' '}
                <br /> domains, and even a full-functioning mobile app to
                <br /> help you efficiently process orders both on iOS and{' '}
                <br />
                Android.
              </Paragraph>
            </Row>
          </section>
        </>
      ) : (
        <>
          {' '}
          <section
            className='header-shape'
            style={{
              background: 'white',
            }}>
            <Row justify={'center'}>
              <Col span={12}>
                <Typography.Title
                  level={1}
                  style={{
                    color: 'black',
                    marginTop: '160px',
                    // marginRight: '80px',
                  }}>
                  Orderitto Helps You Build <br />A Successful Online Store
                </Typography.Title>
                <Row justify={'center'}>
                  <ul style={{ fontSize: 20, textAlign: 'left' }}>
                    <li style={{ marginBottom: 20 }}>
                      Orderitto has a specialized team that not only <br />
                      helps you build your online store, but guides <br />
                      you through your e-commerce journey to help <br /> you
                      grow.
                    </li>
                    <li style={{ marginBottom: 20 }}>
                      Orderitto platform doesn’t require any <br />
                      technical expertise and offers payment and
                      <br /> shipment integrations.
                    </li>
                    <li style={{ marginBottom: 20 }}>
                      It’s totally <b>free, NO</b> trial periods or anything.
                    </li>
                  </ul>
                </Row>
              </Col>
              <Col span={12}>
                {' '}
                <div
                  style={
                    {
                      // background: 'white',
                    }
                  }>
                  <img
                    src={aboutUsBg}
                    style={{
                      width: '95%',
                    }}
                    alt='aboutUsBg'
                  />
                </div>
              </Col>
            </Row>
          </section>
          <section
            className='header-shape'
            style={{
              background: 'white',
            }}>
            <Row justify={'start'}>
              <Col
                span={12}
                style={{
                  marginTop: '100px',
                  marginBottom: '100px',
                }}>
                {' '}
                <div
                  style={
                    {
                      // background: 'white',
                    }
                  }>
                  <img
                    src={home3}
                    style={{
                      width: '500px',
                    }}
                    alt='home3'
                  />
                </div>
              </Col>

              <Col
                span={12}
                style={{
                  marginTop: '100px',
                  marginBottom: '100px',
                }}>
                <Row justify={'start'}>
                  {' '}
                  <Typography.Title
                    level={1}
                    style={{
                      color: 'black',
                      textAlign: 'left',

                      // marginRight: '80px',
                    }}>
                    Our Mission is to Help Your <br />
                    Business Thrive
                  </Typography.Title>
                </Row>

                <Row justify={'start'}>
                  <Paragraph style={{ fontSize: 20, textAlign: 'left' }}>
                    With Orderitto, you can easily create an online store
                    <br /> that has amazing features such as promotions, custom{' '}
                    <br /> domains, and even a full-functioning mobile app to
                    <br /> help you efficiently process orders both on iOS and{' '}
                    <br />
                    Android.
                  </Paragraph>
                </Row>
              </Col>
            </Row>
          </section>
        </>
      )}
    </>
  );
}

export default AboutUs;
