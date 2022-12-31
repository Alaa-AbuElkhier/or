import React from 'react';

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

function AppContent({ darkMode, setThemes, theme }) {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<HomePage darkMode={darkMode} theme={theme} />}
        />
        <Route
          path='/about-us'
          element={<AboutUs darkMode={darkMode} setThemes={setThemes} />}
        />
        <Route
          path='/contact-us'
          element={<ContactUs darkMode={darkMode} setThemes={setThemes} />}
        />
        <Route
          path='/faq'
          element={<FaqPage darkMode={darkMode} setThemes={setThemes} />}
        />

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
          element={<PricingPage setThemes={setThemes} darkMode={darkMode} />}
        />
        <Route
          path='/pricing-plan'
          element={<PricingPlan setThemes={setThemes} darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default AppContent;
