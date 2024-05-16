import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>H</Layout>}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
