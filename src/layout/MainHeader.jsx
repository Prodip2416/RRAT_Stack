import { Breadcrumb, Button, Dropdown, Layout, Menu, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";
import { logout } from "../features/auth/authSlice";
const { Header } = Layout;

export default function MainHeader() {
  const [breadcrumbItems, setBreadcumbsItems] = useState([]);
  const dispatch = useDispatch();

  const getBreadcumbsData = () => {
    let pathNames = window?.location?.pathname?.split("/").filter(Boolean);
    if (pathNames.length === 0) {
      pathNames = window?.location?.href
        ?.split("#")[1]
        ?.split("/")
        ?.filter(Boolean);
    }
    const breadcrumbItems = pathNames?.map((pathName) => ({
      title: pathName?.replace(/^\w/, (c) => c?.toUpperCase()),
    }));
    setBreadcumbsItems(breadcrumbItems);
  };

  useEffect(() => {
    getBreadcumbsData();
  }, [window?.location?.pathname?.href]);

  const handleLogout = () => {
    dispatch(logout());
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

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

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

      <div>
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          defaultChecked={true}
          onClick={handleTheme}
        />
        <Dropdown overlay={menu} trigger={["hover"]}>
          <Button type="link">Welcome Admin</Button>
        </Dropdown>
      </div>
    </Header>
  );
}
