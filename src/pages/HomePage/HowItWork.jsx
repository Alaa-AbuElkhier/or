import React from 'react';
import { Row, Col, Button, Typography } from 'antd';

import home2 from '../../assets/home2.png';
import home3 from '../../assets/home3.png';

const { Paragraph } = Typography;

function HowItWork() {
  return (
    <section className='section'>
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
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} align={'middle'}>
                <img
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    height: '400px',
                    marginTop: '100px',
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
                <Typography.Title
                  level={1}
                  style={{
                    color: 'black',
                  }}>
                  How it Works?
                </Typography.Title>
                <Paragraph
                  style={{
                    color: 'black',
                    fontSize: 20,
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  Orderitto helps you create digital solutions for your
                  <br /> business in the easiest way possible. With a couple of{' '}
                  <br />
                  clicks from your mouse, you will be able to get a<br />{' '}
                  website and mobile application along with a 24/7 <br />
                  technical support for free. You don’t need a coding <br />
                  background or even design skills to create your <br />
                  solutions.
                </Paragraph>
                <Row>
                  <Col push={5}>
                    {' '}
                    <Button type='primary' size='large'>
                      START NOW
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
