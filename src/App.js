import React, { useState, useEffect } from 'react';

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
import ServicesShopping from './pages/ServicesShopping/ServicesShopping';
import ServicesMedical from './pages/ServicesMedical/ServicesMedical';
import PricingPage from './pages/PricingPage/PricingPage';
import PricingPlan from './pages/PricingPage/PricingPlan';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [darkMode, setDarkMode] = useState();
  const [logoTheme, setLogoTheme] = useState('light');
  const [themes, setThemes] = useState('light');

  //Switch theme function
  const switchTheme = (darkMode) => {
    setDarkMode(darkMode);
    console.log(darkMode);
    if (darkMode) {
      setThemes('dark');
    } else {
      setThemes('light');
    }
  };
  //save value on local storage

  const setThemeInStorage = (theme) => {
    localStorage.setItem('theme', theme);
  };
  setThemeInStorage(themes);
  const getThemeInStorage = () => {
    return localStorage.getItem('theme'); // returns 'light' in this case
  };
  const theme = getThemeInStorage();
  console.log(theme);
  if (theme === 'dark') {
    return (
      <div className='App'>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: '#63A3DC',
              colorLinkHover: 'red',
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
              <AppHeader
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                logoTheme={logoTheme}
                setLogoTheme={setLogoTheme}
                // onChange={onChange}
                switchTheme={switchTheme}
                themes={themes}
              />
            </Header>
            <Content>
              <Routes>
                <Route path='/' element={<HomePage darkMode={darkMode} />} />
                <Route
                  path='/about-us'
                  element={
                    <AboutUs darkMode={darkMode} setThemes={setThemes} />
                  }
                />
                <Route
                  path='/contact-us'
                  element={
                    <ContactUs darkMode={darkMode} setThemes={setThemes} />
                  }
                />
                <Route
                  path='/faq'
                  element={
                    <FaqPage darkMode={darkMode} setThemes={setThemes} />
                  }
                />

                <Route
                  path='/services-shopping'
                  element={
                    <ServicesShopping
                      setThemes={setThemes}
                      darkMode={darkMode}
                    />
                  }
                />
                <Route
                  path='/services-medical'
                  element={
                    <ServicesMedical
                      setThemes={setThemes}
                      darkMode={darkMode}
                    />
                  }
                />
                <Route
                  path='/pricing'
                  element={
                    <PricingPage setThemes={setThemes} darkMode={darkMode} />
                  }
                />
                <Route
                  path='/pricing-plan'
                  element={
                    <PricingPlan setThemes={setThemes} darkMode={darkMode} />
                  }
                />
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
            colorLinkHover: '#fff',
            colorPrimary: '#52a9db',
            // colorBgMask: '#000',
            // fontSize: 24,
          },
        }}>
        <Layout>
          <Header>
            <AppHeader
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              logoTheme={logoTheme}
              setLogoTheme={setLogoTheme}
              // onChange={onChange}
              switchTheme={switchTheme}
              themes={themes}
            />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<HomePage darkMode={darkMode} />} />
              <Route
                path='/about-us'
                element={<AboutUs setThemes={setThemes} />}
              />
              <Route
                path='/contact-us'
                element={<ContactUs setThemes={setThemes} />}
              />
              <Route path='/faq' element={<FaqPage setThemes={setThemes} />} />
              <Route
                path='/services-shopping'
                element={
                  <ServicesShopping setThemes={setThemes} darkMode={darkMode} />
                }
              />
              <Route
                path='/services-medical'
                element={
                  <ServicesMedical setThemes={setThemes} darkMode={darkMode} />
                }
              />
              <Route
                path='/pricing'
                element={
                  <PricingPage setThemes={setThemes} darkMode={darkMode} />
                }
              />
              <Route
                path='/pricing-plan'
                element={
                  <PricingPlan setThemes={setThemes} darkMode={darkMode} />
                }
              />
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
