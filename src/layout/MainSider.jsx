import { Layout, Menu } from "antd";
import { menuItems } from "../menuItems";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const { Sider } = Layout;
const MainSider = () => {
  const [items, setItems] = useState();
  const navigate = useNavigate();

  const filterMenuItemsByRole = (items, role) => {
    return items
      .filter((item) => item?.allowedRoles?.includes(role)) // Filter items by role
      .map((item) => {
        const newItem = { ...item };
        if (newItem?.children) {
          newItem.children = filterMenuItemsByRole(newItem.children, role); // Recursively filter children
        }
        return newItem;
      });
  };

  const handleMenuClick = ({ key }) => {
    // Recursive function to find the selected item
    const findMenuItem = (items, key) => {
      for (const item of items) {
        if (item.key === key) {
          return item; // Return the matching item
        }
        if (item.children) {
          const foundChild = findMenuItem(item.children, key); // Recursive call for children
          if (foundChild) {
            return foundChild;
          }
        }
      }
      return null; // Return null if no match is found
    };

    const selectedItem = findMenuItem(menuItems, key);

    if (selectedItem?.path) {
      navigate(selectedItem.path); // Navigate to the item's path
    }
  };

  useEffect(() => {
    if (menuItems.length) {
      setItems(filterMenuItemsByRole(menuItems, "ADMIN"));
    }
  }, [menuItems]);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="80"
      style={{
        background: "#001529",
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "16px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        SASS Dashboard
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        onClick={handleMenuClick}
      ></Menu>
    </Sider>
  );
};

export default MainSider;
