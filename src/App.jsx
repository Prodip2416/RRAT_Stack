import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import MainLayout from "./layout/MainLayout";
import ErrorBoundary from "./pages/ErrorBoundary";
import Login from "./pages/Login";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthContext";
import { Spin } from "antd";

const App = () => (
  <ErrorBoundary>
    <Router>
      <Suspense fallback={<Spin size="large"></Spin>}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            {routes.map(({ path, component: Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <PrivateRoute>
                    <MainLayout>
                      <Component />
                    </MainLayout>
                  </PrivateRoute>
                }
              />
            ))}
          </Routes>
        </AuthProvider>
      </Suspense>
    </Router>
  </ErrorBoundary>
);

export default App;
