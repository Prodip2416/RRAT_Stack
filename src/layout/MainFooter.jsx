import { Layout } from "antd";
import { useAuth } from "../auth/AuthContext";

const { Footer } = Layout;
const MainFooter = () => {
  const { isDarkMode } = useAuth();
  return (
    <Footer
      style={{
        textAlign: "center",
        background: isDarkMode ? "#001529" : "#f0f2f5",
        color: isDarkMode ? "white" : "#001529",
        padding: "20px 0",
      }}
    >
      @Boilerplate, REACT, REDUX, ANTD & TAILWINDCSS ©2025 Created by Prodip
    </Footer>
  );
};
export default MainFooter;
