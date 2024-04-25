import Layout from '@/components/Layout';
import { CurrentContext } from '@/config/index.jsx';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

function App() {
  const [themeValue, setTheme] = useState('light');

  return (
    <CurrentContext.Provider value={{ setTheme }}>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: themeValue === 'dark' ? [theme.darkAlgorithm, theme.compactAlgorithm] : theme.compactAlgorithm,
        }}>
        <Layout />
      </ConfigProvider>
    </CurrentContext.Provider>
  );
}

export default App;
