import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import footerbg from './assets/footerbg.png';
import { ConfigProvider, Button, theme, Layout, Switch } from 'antd';

import { Routes, Route, Outlet, Link, json } from 'react-router-dom';
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
import AppContent from './AppContent';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [darkMode, setDarkMode] = React.useState(
    JSON.parse(localStorage.getItem('darkMode'))
  );
  const [logoTheme, setLogoTheme] = useState('light');
  const [themes, setThemes] = React.useState(localStorage.getItem('theme'));
  //Switch theme function
  const switchTheme = (darkModeFlag) => {
    setDarkMode(darkModeFlag);
    localStorage.setItem('darkMode', darkModeFlag);
    if (darkModeFlag) {
      localStorage.setItem('theme', 'dark');
      setThemes('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setThemes('light');
    }
  };

  if (darkMode) {
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
              <AppContent
                darkMode={darkMode}
                setThemes={setThemes}
                theme={theme}
              />
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
            <AppContent darkMode={darkMode} setThemes={setThemes} />
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
