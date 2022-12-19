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
} from 'antd';
import ServicesweProvide from './ServicesweProvide';
import logo from '../../assets/logo.png';
import servicebg from '../../assets/home1.png';
import clients from '../../assets/clients.png';
import manage2 from '../../assets/manage2.png';
import FeaturesYouWillGet from './FeaturesYouWillGet';
import LifetimeUpdates from './LifetimeUpdates';
import OurPricingPlans from './OurPricingPlans';
import GetYourBusinessApp from './GetYourBusinessApp';
const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;
function ClientsTestimonials() {
  return (
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
  );
}

export default ClientsTestimonials;
