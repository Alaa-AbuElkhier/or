import React from 'react';
import { Layout, Row, Col, Button, Typography, Space, Carousel } from 'antd';

import { Routes, Route, Outlet, Link } from 'react-router-dom';

import FeaturesYouWillGet from './FeaturesYouWillGet';
import LifetimeUpdates from './LifetimeUpdates';
import OurPricingPlans from './OurPricingPlans';
import GetYourBusinessApp from './GetYourBusinessApp';
import HowItWork from './HowItWork';
import ManageYourLife from './ManageYourLife';
import ClientsTestimonials from './ClientsTestimonials';
import ServicesweProvide from './ServicesweProvide';

import home1 from '../../assets/home1.png';
import footerbg from '../../assets/footerbg.png';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import HomeSlider from './HomeSlider';
import AboutUs from '../AboutUsPage/AboutUs';

const { Header, Footer, Sider, Content } = Layout;
const { Paragraph } = Typography;

function HomePage({ darkMode }) {
  return (
    <div>
      <Layout>
        {/* <Header>
          <AppHeader></AppHeader>
        </Header> */}
        <Content>
          <HomeSlider darkMode={darkMode} />
          <HowItWork darkMode={darkMode} />
          <ManageYourLife darkMode={darkMode} />
          <ServicesweProvide darkMode={darkMode} />
          <FeaturesYouWillGet darkMode={darkMode} />
          <LifetimeUpdates darkMode={darkMode} />
          <ClientsTestimonials darkMode={darkMode} />
          <OurPricingPlans darkMode={darkMode} />
          <GetYourBusinessApp darkMode={darkMode} />
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'black',
            backgroundImage: `url(${footerbg})`,
          }}>
          <AppFooter />
        </Footer> */}
      </Layout>{' '}
      <Content></Content>
    </div>
  );
}

export default HomePage;
