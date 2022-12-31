import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Row, Col, Typography, Carousel, Avatar, Card } from 'antd';

import { useMediaQuery } from 'react-responsive';

import manAvatar from '../../assets/manAvatar.png';
import clientsBgRes from '../../assets/clientsBgRes.png';
import Vector from '../../assets/Vector.png';

const { Paragraph, Text } = Typography;
const { Meta } = Card;
const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  1024: {
    items: 2,
  },
};
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
                <Card
                  style={{
                    width: 300,
                    height: 190,
                    marginBottom: '30px',
                  }}>
                  <Meta
                    avatar={<Avatar src={manAvatar} size={'large'} />}
                    title={
                      <Text style={{ color: 'white', fontSize: 16 }}>
                        Emad Adel
                      </Text>
                    }
                    description={
                      <Text style={{ color: 'white' }}>
                        Lead Intranet Technician
                      </Text>
                    }
                  />
                  <Row justify={'center'}>
                    {' '}
                    <Paragraph
                      style={{
                        color: 'white',
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
              <Row justify={'center'} style={{ marginBottom: '30px' }}>
                <Card
                  style={{
                    width: 300,
                    height: 190,
                    marginBottom: '30px',
                  }}>
                  <Meta
                    avatar={<Avatar src={manAvatar} size={'large'} />}
                    title={
                      <Text style={{ color: 'white', fontSize: 16 }}>
                        Emad Adel
                      </Text>
                    }
                    description={
                      <Text style={{ color: 'white' }}>
                        Lead Intranet Technician
                      </Text>
                    }
                  />
                  <Row justify={'center'}>
                    {' '}
                    <Paragraph
                      style={{
                        color: 'white',
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
              <Row justify={'center'} style={{ marginBottom: '30px' }}>
                <Card
                  style={{
                    width: 300,
                    height: 190,
                    marginBottom: '30px',
                  }}>
                  <Meta
                    avatar={<Avatar src={manAvatar} size={'large'} />}
                    title={
                      <Text style={{ color: 'white', fontSize: 16 }}>
                        Emad Adel
                      </Text>
                    }
                    description={
                      <Text style={{ color: 'white' }}>
                        Lead Intranet Technician
                      </Text>
                    }
                  />
                  <Row justify={'center'}>
                    {' '}
                    <Paragraph
                      style={{
                        color: 'white',
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
        <div>
          <Row>
            <Col span={12} style={{ backgroundColor: 'transparent' }}>
              <Row justify={'end'} align={'middle'}>
                {' '}
                <Typography.Title
                  level={1}
                  style={{
                    color: 'black',
                  }}>
                  Clients <br /> Testimonials
                </Typography.Title>
                <div>
                  <img src={Vector} alt='' />
                </div>
              </Row>
            </Col>
            <Col span={12} style={{ backgroundColor: '#303030' }}>
              <Carousel autoplay={true} style={{ marginTop: '60px' }}>
                <div>
                  <Row justify={'center'} style={{ marginBottom: '30px' }}>
                    <Card
                      style={{ width: 400, height: 190, marginBottom: '30px' }}>
                      <Meta
                        className='.full-card'
                        avatar={
                          <Avatar
                            src={manAvatar}
                            size={'large'}
                            style={{ flex: 0 }}
                          />
                        }
                        title='Emad Adel'
                        description='Lead Intranet Technician'
                      />
                      <Row>
                        {' '}
                        <Paragraph
                          style={{
                            color: 'black',
                            textAlign: 'left',

                            marginTop: '20px',
                          }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Paragraph>
                      </Row>
                    </Card>
                  </Row>
                </div>
                <div>
                  <Row justify={'center'}>
                    <Card style={{ width: 400, height: 190 }}>
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
                          elit,sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Paragraph>
                      </Row>
                    </Card>
                  </Row>
                </div>
                <div>
                  <Row justify={'center'}>
                    <Card style={{ width: 400, height: 190 }}>
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
                          elit,sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Paragraph>
                      </Row>
                    </Card>
                  </Row>
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>
        // <div
        //   style={{
        //     display: 'flex',
        //     flexDirection: ' row-reverse',
        //   }}>
        //   <div
        //     style={{
        //       // background: 'white',
        //       //   backgroundImage: `url(${clients})`,
        //       backgroundColor: 'black',
        //       width: '50%',
        //     }}>
        //     <div className='background'>
        //       <Carousel style={{ marginTop: '60px' }}>
        //         <div>
        //           <Row justify={'center'} style={{ marginBottom: '30px' }}>
        //             <Card
        //               style={{ width: 400, height: 190, marginBottom: '30px' }}>
        //               <Meta
        //                 className='.full-card'
        //                 avatar={
        //                   <Avatar
        //                     src={manAvatar}
        //                     size={'large'}
        //                     style={{ flex: 0 }}
        //                   />
        //                 }
        //                 title='Emad Adel'
        //                 description='Lead Intranet Technician'
        //               />
        //               <Row>
        //                 {' '}
        //                 <Paragraph
        //                   style={{
        //                     color: 'black',
        //                     textAlign: 'left',

        //                     marginTop: '20px',
        //                   }}>
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing
        //                   elit,sed do eiusmod tempor incididunt ut labore et
        //                   dolore magna aliqua.
        //                 </Paragraph>
        //               </Row>
        //             </Card>
        //           </Row>
        //         </div>
        //         <div>
        //           <Row justify={'center'}>
        //             <Card style={{ width: 400, height: 190 }}>
        //               <Meta
        //                 avatar={<Avatar src={manAvatar} size={'large'} />}
        //                 title='Emad Adel'
        //                 description='Lead Intranet Technician'
        //               />
        //               <Row justify={'center'}>
        //                 {' '}
        //                 <Paragraph
        //                   style={{
        //                     color: 'black',
        //                     textAlign: 'left',

        //                     marginTop: '20px',
        //                   }}>
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing
        //                   elit,sed do eiusmod tempor incididunt ut labore et
        //                   dolore magna aliqua.
        //                 </Paragraph>
        //               </Row>
        //             </Card>
        //           </Row>
        //         </div>
        //         <div>
        //           <Row justify={'center'}>
        //             <Card style={{ width: 400, height: 190 }}>
        //               <Meta
        //                 avatar={<Avatar src={manAvatar} size={'large'} />}
        //                 title='Emad Adel'
        //                 description='Lead Intranet Technician'
        //               />
        //               <Row justify={'center'}>
        //                 {' '}
        //                 <Paragraph
        //                   style={{
        //                     color: 'black',
        //                     textAlign: 'left',

        //                     marginTop: '20px',
        //                   }}>
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing
        //                   elit,sed do eiusmod tempor incididunt ut labore et
        //                   dolore magna aliqua.
        //                 </Paragraph>
        //               </Row>
        //             </Card>
        //           </Row>
        //         </div>
        //       </Carousel>
        //     </div>
        //   </div>
        //   <div className='content'>
        //     <Row justify={'center'}>
        //       <Col
        //         style={{
        //           marginTop: '100px',
        //         }}>
        //         <Typography.Title
        //           level={1}
        //           style={{
        //             color: 'white',
        //           }}>
        //           Clients <br /> Testimonials
        //         </Typography.Title>
        //       </Col>
        //     </Row>
        //   </div>
        // </div>
      )}
    </>
  );
}

export default ClientsTestimonials;
