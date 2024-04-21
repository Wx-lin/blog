import { DemoTabList } from '@/config/index.jsx';
import { Tabs } from 'antd';

const Demo = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={DemoTabList} />
    </>
  );
};

export default Demo;
