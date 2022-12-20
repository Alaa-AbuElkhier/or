import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import footerbg from './assets/footerbg.png';
import { ConfigProvider, Button, theme, Layout } from 'antd';

import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUsPage/AboutUs';
import HomePage from './pages/HomePage/HomePage';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ContactUs from './pages/ContactUsPage/ContactUs';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            // colorPrimary: '#00b96b',
            // colorBgMask: '#000',
            // fontSize: 24,
          },
        }}>
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact-us' element={<ContactUs />} />
            </Routes>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              backgroundColor: 'black',
              backgroundImage: `url(${footerbg})`,
            }}>
            <AppFooter />
          </Footer>
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default App;
