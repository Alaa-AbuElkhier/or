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

import featuresBg from '../../assets/featuresBg.png';
import home6 from '../../assets/home6.png';

const { Paragraph, Text } = Typography;

function LifetimeUpdates({ darkMode }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  if (darkMode) {
    return (
      <>
        {isTabletOrMobile ? (
          <div
            style={{
              backgroundColor: 'white',
              paddingTop: '40px',
            }}>
            <Row
              justify={'center'}
              style={{
                marginBottom: '20px',
              }}>
              <Typography.Title
                level={2}
                style={{
                  color: 'black',
                }}>
                Lifetime Updates
              </Typography.Title>
            </Row>
            <Row justify={'center'}>
              {' '}
              <img
                style={{
                  width: '300px',
                }}
                src={home6}
                alt='home6'
              />
            </Row>
            <Row justify={'center'}>
              <Paragraph
                style={{
                  color: '#5A7184',
                  fontSize: 20,
                  marginTop: '20px',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniams
              </Paragraph>
            </Row>
            <Row justify={'center'}>
              {' '}
              <Button
                style={{
                  marginBottom: '40px',
                  marginTop: '20px',
                }}
                type='primary'
                size='large'>
                Join +10,000 Clients
              </Button>
            </Row>
          </div>
        ) : (
          <div style={{ backgroundColor: '#303030', paddingTop: '50px' }}>
            <Row
              style={{
                marginTop: '20px',
                paddingBottom: '50px',
              }}
              justify={'center'}>
              <Col span={12}>
                {' '}
                <Typography.Title
                  level={1}
                  style={{
                    color: 'white',
                  }}>
                  Lifetime Updates
                </Typography.Title>
                <Paragraph
                  style={{
                    color: '#AEAEAE',
                    fontSize: 20,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore{' '}
                  <br />
                  magna aliqua. Ut enim ad minim veniams
                </Paragraph>
                <Button
                  type='primary'
                  size='large'
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Join +10,000 Clients
                </Button>
              </Col>
              <Col span={12}>
                <img src={home6} alt='home6' />
              </Col>
            </Row>
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
            backgroundColor: 'white',
            paddingTop: '40px',
          }}>
          <Row
            justify={'center'}
            style={{
              marginBottom: '20px',
            }}>
            <Typography.Title
              level={2}
              style={{
                color: 'black',
              }}>
              Lifetime Updates
            </Typography.Title>
          </Row>
          <Row justify={'center'}>
            {' '}
            <img
              style={{
                width: '300px',
              }}
              src={home6}
              alt='home6'
            />
          </Row>
          <Row justify={'center'}>
            <Paragraph
              style={{
                color: '#5A7184',
                fontSize: 20,
                marginTop: '20px',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniams
            </Paragraph>
          </Row>
          <Row justify={'center'}>
            {' '}
            <Button
              style={{
                marginBottom: '40px',
                marginTop: '20px',
              }}
              type='primary'
              size='large'>
              Join +10,000 Clients
            </Button>
          </Row>
        </div>
      ) : (
        <div style={{ backgroundColor: 'white', paddingTop: '50px' }}>
          <Row
            style={{
              marginTop: '20px',
              paddingBottom: '50px',
            }}
            justify={'center'}>
            <Col span={12}>
              {' '}
              <Typography.Title
                level={1}
                style={{
                  color: 'black',
                }}>
                Lifetime Updates
              </Typography.Title>
              <Paragraph
                style={{
                  color: '#5A7184',
                  fontSize: 20,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore{' '}
                <br />
                magna aliqua. Ut enim ad minim veniams
              </Paragraph>
              <Button type='primary' size='large'>
                Join +10,000 Clients
              </Button>
            </Col>
            <Col span={12}>
              <img src={home6} alt='home6' />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default LifetimeUpdates;
