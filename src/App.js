import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import footerbg from './assets/footerbg.png';
import { ConfigProvider, Button, theme, Layout, Switch } from 'antd';

import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUsPage/AboutUs';
import HomePage from './pages/HomePage/HomePage';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ContactUs from './pages/ContactUsPage/ContactUs';
import FaqPage from './pages/FaqPage/FaqPage';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  if (darkMode) {
    return (
      <div className='App'>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: '#63A3DC',
              // colorBgMask: '#303030',
              // colorPrimaryBg: '#303030',
              colorBgBase: '#111010',
              // colorBgContainer: 'red',
              // fontSize: 24,
            },
          }}>
          <Layout>
            <Header
              style={{
                position: 'absolute',
                backgroundColor: 'transparent',
                zIndex: 999,
                right: 0,
                left: 0,
                top: 0,

                border: 0,
              }}>
              <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
            </Header>
            <Content>
              <Routes>
                <Route path='/' element={<HomePage darkMode={darkMode} />} />
                <Route
                  path='/about-us'
                  element={<AboutUs darkMode={darkMode} />}
                />
                <Route
                  path='/contact-us'
                  element={<ContactUs darkMode={darkMode} />}
                />
                <Route path='/faq' element={<FaqPage darkMode={darkMode} />} />
              </Routes>
            </Content>

            <Footer
              style={{
                textAlign: 'center',
                backgroundColor: '#303030',
                backgroundImage: `url(${footerbg})`,
              }}>
              <AppFooter />
            </Footer>
          </Layout>
        </ConfigProvider>
      </div>
    );
  }
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
            <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<HomePage darkMode={darkMode} />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/faq' element={<FaqPage />} />
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
