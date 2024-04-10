import { ConfigProvider, theme } from 'antd';
import { CurrentContext } from '@/config/index.jsx';
import Layout from '@/components/Layout';
import { useState } from 'react';

function App() {
  const [themeValue, setTheme] = useState('light');

  return (
    <CurrentContext.Provider value={{ setTheme }}>
      <ConfigProvider
        theme={{
          // 1. 单独使用暗色算法
          algorithm: themeValue === 'dark' ? theme.darkAlgorithm : theme.compactAlgorithm,
        }}>
        <Layout />
      </ConfigProvider>
    </CurrentContext.Provider>
  );
}

export default App;
