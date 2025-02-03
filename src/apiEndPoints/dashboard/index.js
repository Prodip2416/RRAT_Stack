import * as dashboardAnalysis from "../dashboard/analysis";
import * as dashboardMonitor from "../dashboard/monitor";
import * as dashboardWorkplace from "../dashboard/workplace";

export const dashboard = {
  ...dashboardAnalysis,
  ...dashboardMonitor,
  ...dashboardWorkplace,
};
