import { Form, Input, Button, Checkbox, Tabs, Typography, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    if (values?.username === "admin" || values?.username === "user") {
      if (values?.password === "123456") {
        dispatch(login());
        navigate("/dashboard/monitor");
      } else {
        message.error("Please enter password: 123456");
      }
    } else {
      // show error message
      return false;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        style={{
          width: 400,
          padding: "20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Title level={2} style={{ marginBottom: 0 }}>
            Ant Design
          </Title>
          <Text type="secondary">
            Ant Design is the most influential web design specification
          </Text>
        </div>

        <Tabs defaultActiveKey="1" centered>
          {/* Account Login Tab */}
          <TabPane tab="Account Login" key="1">
            <Form
              name="normal_login"
              initialValues={{ remember: true }}
              layout="vertical"
              onFinish={onSubmit}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined />}
                  placeholder="Username: admin or user"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password: 123456"
                />
              </Form.Item>

              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a style={{ float: "right" }} href="/">
                  Forgot Password?
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </TabPane>

          {/* Phone Login Tab */}
          {/* <TabPane tab="Phone Login" key="2">
            <Form
              name="phone_login"
              initialValues={{ remember: true }}
              layout="vertical"
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: 10 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter verification code!",
                  },
                ]}
              >
                <Row gutter={8}>
                  <Col span={16}>
                    <Input
                      prefix={<LockOutlined />}
                      placeholder="Verification Code"
                    />
                  </Col>
                  <Col span={8}>
                    <Button block>
                      Get Code
                    </Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a style={{ float: "right" }} href="/">
                  Forgot Password?
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </TabPane> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
