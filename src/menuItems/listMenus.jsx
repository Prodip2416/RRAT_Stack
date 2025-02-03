import { EditOutlined } from "@ant-design/icons";

export const listMauns = {
  key: "list",
  label: "List",
  icon: <EditOutlined />,
  // children: [
  //   { key: "basic-form", label: "Basic Form" },
  //   { key: "step-form", label: "Step Form" },
  //   { key: "advanced-form", label: "Advanced Form" },
  // ],
  path: "/list",
  allowedRoles: ["ADMIN"],
};
