import logo from './logo.svg';
import './App.css';
import { ConfigProvider, Button, theme } from 'antd';
import HomePage from './pages/HomePage/HomePage';

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
        <HomePage />;
      </ConfigProvider>
    </div>
  );
}

export default App;
