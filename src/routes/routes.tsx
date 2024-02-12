import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard.layout";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path={"/dashboard"} element={<DashboardLayout />} />
      <Route path={"/dashboard/*"} element={<DashboardLayout />} />
    </Routes>
  );
};

export default MainRoute;
