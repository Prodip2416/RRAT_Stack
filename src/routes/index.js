import { lazy } from "react";
import dashboardRoutes from "./dashboardRoutes";

const routes = [
  ...dashboardRoutes,
  {
    path: "*",
    component: lazy(() => import("../pages/NotFound")),
  },
];

export default routes;
