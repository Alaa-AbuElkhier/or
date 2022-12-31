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

function HomePage({ darkMode, theme }) {
  return (
    <div>
      <Layout>
        {/* <Header>
          <AppHeader></AppHeader>
        </Header> */}
        <Content>
          <HomeSlider darkMode={darkMode} theme={theme} />
          <HowItWork darkMode={darkMode} theme={theme} />
          <ManageYourLife darkMode={darkMode} theme={theme} />
          <ServicesweProvide darkMode={darkMode} theme={theme} />
          <FeaturesYouWillGet darkMode={darkMode} theme={theme} />
          <LifetimeUpdates darkMode={darkMode} theme={theme} />
          <ClientsTestimonials darkMode={darkMode} theme={theme} />
          <OurPricingPlans darkMode={darkMode} theme={theme} />
          <GetYourBusinessApp darkMode={darkMode} theme={theme} />
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
