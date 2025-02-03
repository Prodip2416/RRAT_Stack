import { Layout } from "antd";
import MainSider from "./MainSider";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <MainSider />
      <Layout>
        <MainHeader />
        <Content
          style={{
            margin: "10px",
            padding: "16px",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
        >
          {children}
        </Content>
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
