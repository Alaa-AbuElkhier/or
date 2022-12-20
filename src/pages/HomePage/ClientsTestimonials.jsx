import React from 'react';
import { Row, Col, Typography, Carousel, Avatar, Card } from 'antd';

import { useMediaQuery } from 'react-responsive';

import manAvatar from '../../assets/manAvatar.png';
import clientsBgRes from '../../assets/clientsBgRes.png';

const { Paragraph } = Typography;
const { Meta } = Card;
function ClientsTestimonials() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>
      {isTabletOrMobile ? (
        <div
          style={{
            backgroundImage: `url(${clientsBgRes})`,
          }}>
          <Row justify={'center'}>
            <Typography.Title
              level={2}
              style={{
                color: 'white',
              }}>
              Clients Testimonials
            </Typography.Title>
          </Row>
          <Carousel>
            <div>
              <Row justify={'center'} style={{ marginBottom: '30px' }}>
                <Card style={{ width: 300, height: 190, marginBottom: '30px' }}>
                  <Meta
                    avatar={<Avatar src={manAvatar} size={'large'} />}
                    title='Emad Adel'
                    description='Lead Intranet Technician'
                  />
                  <Row justify={'center'}>
                    {' '}
                    <Paragraph
                      style={{
                        color: 'black',
                        textAlign: 'left',

                        marginTop: '20px',
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit,sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </Paragraph>
                  </Row>
                </Card>
              </Row>
            </div>
            <div>
              <Row justify={'center'}>
                <Card style={{ width: 300, height: 190 }}>
                  <Meta
                    avatar={<Avatar src={manAvatar} size={'large'} />}
                    title='Emad Adel'
                    description='Lead Intranet Technician'
                  />
                  <Row justify={'center'}>
                    {' '}
                    <Paragraph
                      style={{
                        color: 'black',
                        textAlign: 'left',

                        marginTop: '20px',
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit,sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </Paragraph>
                  </Row>
                </Card>
              </Row>
            </div>
            <div>
              <Row justify={'center'}>
                <Card style={{ width: 300, height: 190 }}>
                  <Meta
                    avatar={<Avatar src={manAvatar} size={'large'} />}
                    title='Emad Adel'
                    description='Lead Intranet Technician'
                  />
                  <Row justify={'center'}>
                    {' '}
                    <Paragraph
                      style={{
                        color: 'black',
                        textAlign: 'left',

                        marginTop: '20px',
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit,sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </Paragraph>
                  </Row>
                </Card>
              </Row>
            </div>
          </Carousel>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: ' row-reverse',
          }}>
          <div
            style={{
              // background: 'white',
              //   backgroundImage: `url(${clients})`,
              backgroundColor: 'black',
              width: '50%',
            }}>
            <div className='background'>
              {' '}
              {/* <img src={home2} alt='home2' /> */}
            </div>
          </div>
          <div className='content'>
            <Row>
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
      )}
    </>
  );
}

export default ClientsTestimonials;
