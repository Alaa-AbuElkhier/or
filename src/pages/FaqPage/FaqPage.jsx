import React from 'react';
import { Row, Col, Typography, Select, Collapse } from 'antd';
import { useMediaQuery } from 'react-responsive';

import faqBg from '../../assets/faqBg.png';
// import aboutUs1 from '../../assets/aboutUs1.png';
import home3 from '../../assets/home3.png';
const { Option } = Select;
const { Paragraph } = Typography;
const { Panel } = Collapse;
const text = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s , when an unknown printer took a galley of type and scrambled it to make a type 
`;

function FaqPage({ darkMode, setThemes }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  setThemes('dark');
  if (darkMode) {
    return (
      <>
        {isTabletOrMobile ? (
          <div>
            <Row justify={'center'} style={{ marginTop: '100px' }}>
              <img src={faqBg} alt='faqBg' style={{ width: '300px' }} />
            </Row>
            <Row
              justify={'center'}
              style={{
                marginTop: '30px',
              }}>
              <Typography.Title
                level={2}
                style={{
                  margin: 0,
                  marginBottom: '30px',
                  color: 'white',
                }}>
                FAQ
              </Typography.Title>
            </Row>
            <Row
              justify={'center'}
              style={{
                marginBottom: '30px',
              }}>
              <Col span={20}>
                {' '}
                <Collapse>
                  <Panel
                    style={{ backgroundColor: '#313131' }}
                    header='What is INVASSO ?'
                    key='1'>
                    <p style={{ color: '#AEAEAE', textAlign: 'left' }}>
                      {text}
                    </p>
                  </Panel>
                  <Panel
                    style={{ backgroundColor: '#313131' }}
                    header='What is INVASSO ?'
                    key='2'>
                    <p style={{ color: '#AEAEAE', textAlign: 'left' }}>
                      {text}
                    </p>
                  </Panel>
                  <Panel
                    style={{ backgroundColor: '#313131' }}
                    header='What is INVASSO ?'
                    key='3'>
                    <p style={{ color: '#AEAEAE', textAlign: 'left' }}>
                      {text}
                    </p>
                  </Panel>
                </Collapse>
              </Col>{' '}
            </Row>
          </div>
        ) : (
          <div>
            <Row>
              <Col span={10} style={{ marginTop: '120px', marginLeft: '30px' }}>
                <Row justify={'start'}>
                  {' '}
                  <Typography.Title
                    level={1}
                    style={{
                      margin: 0,
                      marginBottom: '30px',
                      color: 'white',
                    }}>
                    FAQ
                  </Typography.Title>
                </Row>{' '}
                <Collapse>
                  <Panel
                    style={{ backgroundColor: 'transparent' }}
                    header='What is INVASSO ?'
                    key='1'>
                    <p style={{ color: 'white', textAlign: 'left' }}>{text}</p>
                  </Panel>
                  <Panel
                    style={{ backgroundColor: 'transparent' }}
                    header='What is INVASSO ?'
                    key='2'>
                    <p style={{ color: 'white', textAlign: 'left' }}>{text}</p>
                  </Panel>
                  <Panel
                    style={{ backgroundColor: 'transparent' }}
                    header='What is INVASSO ?'
                    key='3'>
                    <p style={{ color: 'white', textAlign: 'left' }}>{text}</p>
                  </Panel>
                  <Panel
                    style={{ backgroundColor: 'transparent' }}
                    header='What is INVASSO ?'
                    key='4'>
                    <p style={{ color: 'white', textAlign: 'left' }}>{text}</p>
                  </Panel>
                </Collapse>
              </Col>
              <Col span={12}>
                <img src={faqBg} alt='faqBg' />
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
        <div>
          <Row justify={'center'} style={{ marginTop: '100px' }}>
            <img src={faqBg} alt='faqBg' style={{ width: '300px' }} />
          </Row>
          <Row
            justify={'center'}
            style={{
              marginTop: '30px',
            }}>
            <Typography.Title
              level={2}
              style={{
                margin: 0,
                marginBottom: '30px',
              }}>
              FAQ
            </Typography.Title>
          </Row>
          <Row
            justify={'center'}
            style={{
              marginBottom: '30px',
            }}>
            <Col span={20}>
              {' '}
              <Collapse>
                <Panel
                  style={{ backgroundColor: 'white' }}
                  header='What is INVASSO ?'
                  key='1'>
                  <p style={{ color: '#5A7184', textAlign: 'left' }}>{text}</p>
                </Panel>
                <Panel
                  style={{ backgroundColor: 'white' }}
                  header='What is INVASSO ?'
                  key='2'>
                  <p style={{ color: '#5A7184', textAlign: 'left' }}>{text}</p>
                </Panel>
                <Panel
                  style={{ backgroundColor: 'white' }}
                  header='What is INVASSO ?'
                  key='3'>
                  <p style={{ color: '#5A7184', textAlign: 'left' }}>{text}</p>
                </Panel>
              </Collapse>
            </Col>{' '}
          </Row>
        </div>
      ) : (
        <div>
          <Row>
            <Col span={10} style={{ marginTop: '120px', marginLeft: '30px' }}>
              <Row justify={'start'}>
                {' '}
                <Typography.Title
                  level={1}
                  style={{
                    margin: 0,
                    marginBottom: '30px',
                  }}>
                  FAQ
                </Typography.Title>
              </Row>{' '}
              <Collapse>
                <Panel
                  style={{ backgroundColor: 'white' }}
                  header='What is INVASSO ?'
                  key='1'>
                  <p style={{ color: '#5A7184', textAlign: 'left' }}>{text}</p>
                </Panel>
                <Panel
                  style={{ backgroundColor: 'white' }}
                  header='What is INVASSO ?'
                  key='2'>
                  <p style={{ color: '#5A7184', textAlign: 'left' }}>{text}</p>
                </Panel>
                <Panel
                  style={{ backgroundColor: 'white' }}
                  header='What is INVASSO ?'
                  key='3'>
                  <p style={{ color: '#5A7184', textAlign: 'left' }}>{text}</p>
                </Panel>
              </Collapse>
            </Col>
            <Col span={12}>
              <img src={faqBg} alt='faqBg' />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default FaqPage;
