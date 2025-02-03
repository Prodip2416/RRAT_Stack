import { EditOutlined } from "@ant-design/icons";

export const formMenus = {
  key: "form",
  label: "Form",
  icon: <EditOutlined />,
  children: [
    {
      key: "basic-form",
      label: "Basic Form",
      path: "/form/basic-form",
      allowedRoles: ["ADMIN", "USER"],
    },
    {
      key: "step-form",
      label: "Step Form",
      path: "/form/step-form",
      allowedRoles: ["ADMIN", "USER"],
    },
    {
      key: "advanced-form",
      label: "Advanced Form",
      path: "/form/advance-form",
      allowedRoles: ["ADMIN", "USER"],
    },
  ],
  path: "/form",
  allowedRoles: ["ADMIN", "USER"],
};
