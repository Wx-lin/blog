import { ConfigProvider, theme } from "antd";
import EventEmitter from "eventemitter3";
import Layout from "@/components/Layout";
import { useEffect } from "react";

function App() {
  const event = new EventEmitter();

  useEffect(() => {
    event.on("themeStatus", (checked) => {
      console.log("checked", checked);
    });
    console.log(11);
  });

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
