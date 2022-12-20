import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { useMediaQuery } from 'react-responsive';

import downloadIcon from '../../assets/downloadIcon.png';
import happyIcon2 from '../../assets/happyIcon2.png';
import starIcon from '../../assets/starIcon.png';
import home7 from '../../assets/home7.png';
import googlePlay from '../../assets/googlePlay.png';
import appleStore from '../../assets/appleStore.png';

const { Paragraph, Text } = Typography;
function GetYourBusinessApp() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>
      {isTabletOrMobile ? (
        <div
          style={{
            backgroundColor: '#f3f3f3',

            paddingBottom: '50px',
          }}>
          <Row justify={'center'}>
            <Typography.Title
              level={2}
              style={{
                color: 'black',
                textAlign: 'left',
              }}>
              Get Your Business App
            </Typography.Title>
          </Row>
          <Row justify={'center'}>
            <img
              src={home7}
              alt='home7'
              style={{ width: '300px', marginTop: '30px' }}
            />
          </Row>
          <Row justify={'center'}>
            <Paragraph
              style={{
                color: '#5A7184',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: '30px',
                paddingRight: '20px',
              }}>
              As soon as you get one of Orderitto’s plus plans you will get your
              mobile app for your business. Control everything from a single
              dashboard with centralized inventory, order management, pricing,
              and more.
            </Paragraph>
          </Row>
          <Row justify={'center'}>
            <Col span={12}>
              {' '}
              <a>
                <img src={appleStore} alt='appleStore' />
              </a>
            </Col>
            <Col span={12}>
              {' '}
              <a>
                {' '}
                <img src={googlePlay} alt='googlePlay' />
              </a>
            </Col>
          </Row>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#f3f3f3',

            paddingBottom: '50px',
          }}>
          <Row
            style={{
              paddingTop: '100px',
            }}
            justify={'start'}>
            <Col span={12} push={1}>
              <img src={home7} alt='home7' />
            </Col>
            <Col span={12}>
              <Typography.Title
                level={1}
                style={{
                  color: 'black',
                  textAlign: 'left',
                }}>
                Get Your Business App
              </Typography.Title>
              <Row>
                {' '}
                <Paragraph
                  style={{
                    color: '#5A7184',
                    fontSize: 20,
                    textAlign: 'left',
                  }}>
                  As soon as you get one of Orderitto’s plus plans you will{' '}
                  <br /> get your mobile app for your business. <br />
                  Control everything from a single dashboard with <br />{' '}
                  centralized inventory, order management, pricing, and <br />
                  more.
                </Paragraph>
              </Row>
              <Row>
                <Col span={4}>
                  <a>
                    <img src={appleStore} alt='appleStore' />
                  </a>
                </Col>
                <Col span={4}>
                  <a>
                    {' '}
                    <img src={googlePlay} alt='googlePlay' />
                  </a>
                </Col>
              </Row>
              <Row>
                {/* frist card */}
                <Col span={4} style={{ marginRight: '10px' }}>
                  <Card style={{ backgroundColor: 'white' }}>
                    <Row justify={'center'}>
                      <img src={downloadIcon} alt='home7' />
                    </Row>
                    <Row justify={'center'}>
                      <Text style={{ color: 'black' }}>
                        <b>59865</b>
                      </Text>
                    </Row>
                    <Row justify={'center'}>
                      <Text style={{ color: '#5A7184' }}>DAWNLOAD</Text>
                    </Row>
                  </Card>
                </Col>
                {/* second card */}
                <Col span={4} style={{ marginRight: '10px' }}>
                  <Card style={{ backgroundColor: 'white' }}>
                    <Row justify={'center'}>
                      <img src={happyIcon2} alt='happyIcon' />
                    </Row>
                    <Row justify={'center'}>
                      <Text style={{ color: 'black' }}>
                        <b>3400</b>
                      </Text>
                    </Row>
                    <Row justify={'center'}>
                      <Text style={{ color: '#5A7184' }}>HAPPY CLIENT</Text>
                    </Row>
                  </Card>
                </Col>
                {/* third card */}
                <Col span={4}>
                  <Card style={{ backgroundColor: 'white' }}>
                    <Row justify={'center'}>
                      <img src={starIcon} alt='starIcon' />
                    </Row>
                    <Row justify={'center'}>
                      <Text style={{ color: 'black' }}>
                        <b>1500</b>
                      </Text>
                    </Row>
                    <Row justify={'center'}>
                      <Text style={{ color: '#5A7184' }}>REVIEWS</Text>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default GetYourBusinessApp;
