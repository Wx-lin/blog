import { Calendar, Card, Col, Row, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Home = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
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
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
