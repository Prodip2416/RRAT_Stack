import { DashboardOutlined } from "@ant-design/icons";

export const dashboardMenus = {
  key: "dashboard",
  label: "Dashboard",
  icon: <DashboardOutlined />,
  children: [
    {
      key: "analysis",
      label: "Analysis",
      path: "/dashboard/analysis",
      allowedRoles: ["ADMIN", "USER"],
    },
    {
      key: "monitor",
      label: "Monitor",
      path: "/dashboard/monitor",
      allowedRoles: ["ADMIN", "USER"],
    },
    {
      key: "workplace",
      label: "Workplace",
      path: "/dashboard/workplace",
      allowedRoles: ["ADMIN", "USER"],
    },
  ],
  path: "/",
  allowedRoles: ["ADMIN", "USER"],
};
