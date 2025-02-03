import { API_ENDPOINT } from "../apiEndPoints";
import apiClient from "../auth/apiClient";

const dashboardService = {
  getAnalysisData: (id) =>
    apiClient.get(`${API_ENDPOINT.dashboard.DASHBOARD_ANALYSIS_ONE}${id}`),
  postAnalysisData: (data) =>
    apiClient.post(API_ENDPOINT.dashboard.DASHBOARD_ANALYSIS_ONE, data),
  putAnalysisData: (id, data) =>
    apiClient.put(
      `${API_ENDPOINT.dashboard.DASHBOARD_ANALYSIS_ONE}${id}`,
      data
    ),
  deleteAnalysisData: (id) =>
    apiClient.delete(`${API_ENDPOINT.dashboard.DASHBOARD_ANALYSIS_ONE}${id}`),
};

export default dashboardService;
