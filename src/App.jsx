import { Button, ConfigProvider, theme } from "antd";
import Layout from "@/components/Layout";
function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          // 1. 单独使用暗色算法
          algorithm: theme.darkAlgorithm,

          // 2. 组合使用暗色算法与紧凑算法
          // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
      >
        <Layout />
      </ConfigProvider>
    </>
  );
}

export default App;
