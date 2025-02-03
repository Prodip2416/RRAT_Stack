import { useEffect } from "react";
import dashboardService from "../../services/dashboardService";

const Analysis = () => {
  useEffect(() => {
    fetchUser(); // example fetch data
  }, []);

  const fetchUser = async () => {
    try {
      const response = await dashboardService.getAnalysisData();
      console.log(response);
      // setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      // Handle error appropriately
    }
  };

  return <div className="text-2xl">Analysis</div>;
};

export default Analysis;
