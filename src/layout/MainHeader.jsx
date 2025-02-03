import { Breadcrumb, Button, Dropdown, Layout, Menu, Switch } from "antd";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/ui/uiSlice";
const { Header } = Layout;

export default function MainHeader() {
  const { logout } = useAuth();
  const [breadcrumbItems, setBreadcumbsItems] = useState([]);
  const dispatch = useDispatch();
  const { theme, color } = useSelector((state) => state.ui);

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

  const handleTheme = (value) => {
    dispatch(setTheme(value ? "dark" : "light"));
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
