import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard.layout";
import Profile from "../pages/profile";
import { SignInScreen } from "../pages/loginscreen";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path={"/dashboard"} element={<DashboardLayout />} />
      <Route path={"/dashboard/*"} element={<DashboardLayout />} />
      <Route path={"/login"} element={<SignInScreen />} />
      <Route path={"/profile"} element={<Profile />} />
    </Routes>
  );
};

export default MainRoute;
