import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./pages/HomePage";
function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
