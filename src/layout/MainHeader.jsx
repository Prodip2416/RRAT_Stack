import { DownOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Dropdown, Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
const { Header } = Layout;

export default function MainHeader() {
  const { logout } = useAuth();
  const [breadcrumbItems, setBreadcumbsItems] = useState([]);

  const getBreadcumbsData = () => {
    const pathNames = window?.location?.pathname?.split("/").filter(Boolean);
    const breadcrumbItems = pathNames?.map((pathName) => ({
      title: pathName?.replace(/^\w/, (c) => c?.toUpperCase()),
    }));
    setBreadcumbsItems(breadcrumbItems);
  };

  useEffect(() => {
    getBreadcumbsData();
  }, [window?.location?.pathname]);

  const handleLogout = () => {
    logout();
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">
        <span onClick={handleLogout}>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Breadcrumb items={breadcrumbItems} />
      <Dropdown overlay={menu} trigger={["hover"]}>
        <Button type="link">
          Welcome Admin <DownOutlined />
        </Button>
      </Dropdown>
    </Header>
  );
}
