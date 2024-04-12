import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Calendar, Card, Col, Row } from 'antd';
const { Meta } = Card;

const Home = () => {
  return (
    <>
      <div className="h-3/3">
        <Row gutter={16}>
          <Col span={12}>
            <Card
              style={{
                width: 300,
              }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}>
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Calendar fullscreen={false} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
