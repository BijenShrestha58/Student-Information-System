import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard.layout";
import Profile from "../pages/profile";
import { SignInScreen } from "../pages/loginscreen";
import { BarChart } from "../components/partials/BarChart";
import { Landing } from "../pages/landing";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path={"/dashboard"} element={<DashboardLayout />} />
      <Route path={"/dashboard/*"} element={<DashboardLayout />} />
      <Route path={"/login/:role"} element={<SignInScreen />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/graph"} element={<BarChart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MainRoute;
