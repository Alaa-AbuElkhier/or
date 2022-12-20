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
  Carousel,
} from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import '../../styles/responsive.css';
import pricingBgRes from '../../assets/pricingBgRes.png';
import priceCard1 from '../../assets/priceCard1.png';
import featuresBg from '../../assets/featuresBg.png';

const { Paragraph, Text } = Typography;

function OurPricingPlans() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <>
      {isTabletOrMobile ? (
        <div
          style={{
            background: 'white',
            backgroundImage: `url(${pricingBgRes})`,
            paddingBottom: '50px',
          }}>
          <Row justify={'center'}>
            <Typography.Title
              level={2}
              style={{
                color: 'black',
              }}>
              Our Pricing Plans
            </Typography.Title>
          </Row>
          <Row justify={'center'}>
            <Paragraph
              style={{
                color: 'black',
                fontSize: 16,
                marginBottom: 0,
              }}>
              We offer the best quality at reasonable prices. Choose the one
              that suits you from our packages and start selling online
              immediately.
            </Paragraph>
          </Row>

          <Carousel className='pricing'>
            <div>
              <Row
                justify={'center'}
                style={{ marginTop: '30px', marginBottom: '50px' }}>
                <Card hoverable title='100$' style={{ width: 300 }}>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Blog System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Support System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>POS System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Marketing System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Multiple Payment Options</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Reports</Text>
                    </Col>
                  </Row>
                  <Row
                    justify={'center'}
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Button size='large'>GET STARTED</Button>
                  </Row>
                </Card>
              </Row>
            </div>
            <div>
              <Row justify={'center'} style={{ marginTop: '30px' }}>
                <Card hoverable title='120$' style={{ width: 300 }}>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Blog System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Support System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>POS System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Marketing System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Multiple Payment Options</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Reports</Text>
                    </Col>
                  </Row>
                  <Row
                    justify={'center'}
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Button size='large'>GET STARTED</Button>
                  </Row>
                </Card>
              </Row>
            </div>
            <div>
              <Row justify={'center'} style={{ marginTop: '30px' }}>
                <Card hoverable title='150$' style={{ width: 300 }}>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Blog System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Support System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>POS System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Marketing System</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Multiple Payment Options</Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Col span={3}>
                      {' '}
                      <CheckCircleFilled />
                    </Col>
                    <Col>
                      <Text>Reports</Text>
                    </Col>
                  </Row>
                  <Row
                    justify={'center'}
                    style={{
                      paddingBottom: '20px',
                    }}>
                    <Button size='large'>GET STARTED</Button>
                  </Row>
                </Card>
              </Row>
            </div>
          </Carousel>
        </div>
      ) : (
        <div
          style={{
            background: 'white',
            backgroundImage: `url(${featuresBg})`,
            paddingBottom: '50px',
          }}>
          <Row
            style={{
              paddingBottom: '50px',
            }}
            justify={'center'}>
            {' '}
            <Typography.Title
              level={1}
              style={{
                color: 'black',
              }}>
              Our Pricing Plans
            </Typography.Title>
          </Row>
          <Row justify={'center'}>
            <Paragraph
              style={{
                color: 'black',
                fontSize: 20,
                marginBottom: 0,
              }}>
              We offer the best quality at reasonable prices.
            </Paragraph>
          </Row>
          <Row justify={'center'}>
            <Paragraph
              style={{
                color: 'black',
                fontSize: 20,
                marginBottom: 50,
              }}>
              Choose the one that suits you from our packages and start selling
              online immediately.
            </Paragraph>
          </Row>
          <Row className='pricing-card' justify={'center'}>
            {' '}
            <Col span={4}>
              {' '}
              <Card hoverable title='100$' style={{ width: 300 }}>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Blog System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Support System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>POS System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Marketing System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Multiple Payment Options</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Reports</Text>
                  </Col>
                </Row>
                <Row
                  justify={'center'}
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Button size='large'>GET STARTED</Button>
                </Row>
              </Card>
            </Col>
            {/* second card */}
            <Col span={4}>
              {' '}
              <Card
                hoverable
                title='100$'
                style={{ width: 300, marginTop: -30 }}>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Blog System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Support System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>POS System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Marketing System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Multiple Payment Options</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Reports</Text>
                  </Col>
                </Row>
                <Row
                  justify={'center'}
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Button type='primary' size='large'>
                    GET STARTED
                  </Button>
                </Row>
              </Card>
            </Col>
            {/* third card */}
            <Col span={4}>
              {' '}
              <Card hoverable title='100$' style={{ width: 300 }}>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Blog System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Support System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>POS System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Marketing System</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Multiple Payment Options</Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Col span={3}>
                    {' '}
                    <CheckCircleFilled />
                  </Col>
                  <Col>
                    <Text>Reports</Text>
                  </Col>
                </Row>
                <Row
                  justify={'center'}
                  style={{
                    paddingBottom: '20px',
                  }}>
                  <Button size='large'>GET STARTED</Button>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default OurPricingPlans;
