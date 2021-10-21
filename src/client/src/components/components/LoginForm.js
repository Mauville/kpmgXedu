import { Button, Card, Input, Space } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';

export default function LoginForm() {
  return (
    <Card id="main-card" align="center">
      <Space direction="vertical">
        <img id="card-image" src={process.env.PUBLIC_URL + 'images/logo.png'} alt="logo" />
        <Title level={3} align="center">
          Login
        </Title>
        <Text type="secondary" align="baseline">
          Email
        </Text>
        <Input size="large" prefix={<UserOutlined />} />
        <Text type="secondary">Password</Text>
        <Input.Password
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Button type="primary" size="large" align="center" id="sign-in-button">
          Sign In
        </Button>
      </Space>
    </Card>
  );
}
