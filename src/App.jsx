import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import MainLayout from "./layout/MainLayout";
import ErrorBoundary from "./pages/ErrorBoundary";
import Login from "./pages/Login";
import PrivateRoute from "./auth/PrivateRoute";
import { Spin } from "antd";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Spin size="large"></Spin>}>
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
        </Suspense>
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default App;
