import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>h</Layout>}></Route>
    </Routes>
  );
}

export default AppRoutes;
