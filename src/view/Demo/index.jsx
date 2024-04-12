import { Tabs } from 'antd';
import { DemoTabList } from '@/config/index.jsx';

const Demo = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={DemoTabList} />
    </>
  );
};

export default Demo;
