import { lazy } from "react";

const dashboardRoutes = [
  {
    path: "/dashboard/analysis",
    component: lazy(() => import("../pages/dashboard/Analysis")),
  },
  {
    path: "/dashboard/monitor",
    component: lazy(() => import("../pages/dashboard/Monitor")),
  },
  {
    path: "/dashboard/workplace",
    component: lazy(() => import("../pages/dashboard/Workplace")),
  },
];

export default dashboardRoutes;
