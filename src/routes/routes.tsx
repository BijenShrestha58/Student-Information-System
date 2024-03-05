import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard.layout";
import Profile from "../pages/profile";
import ProfileAbindra from "../pages/profile_abindra";
import ProfileBijen from "../pages/profile_bijen";
import ProfileShrutee from "../pages/profile_shrutee";
import ProfileAsmi from "../pages/profile_asmi";
import { SignInScreen } from "../pages/loginscreen";
import { BarChart } from "../components/partials/BarChart";
import { Landing } from "../pages/landing";
import { DashboardTeacherLayout } from "../layouts/dashboard_teacher.layout ";
import { SignInScreenTeacher } from "../pages/loginscreen_teacher";
import { SignInScreenStudent } from "../pages/loginscreen_student";
import { DashboardStudentLayout } from "../layouts/dashboard_student.layout";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path={"/dashboard"} element={<DashboardLayout />} />
      <Route path={"/dashboard/*"} element={<DashboardLayout />} />
      <Route path={"/teacher"} element={<DashboardTeacherLayout />} />
      <Route path={"/teacher/*"} element={<DashboardTeacherLayout />} />
      <Route path={"/student"} element={<DashboardStudentLayout />} />
      <Route path={"/student/*"} element={<DashboardStudentLayout />} />
      <Route path={"/login/admin"} element={<SignInScreen />} />
      <Route path={"/login/teacher"} element={<SignInScreenTeacher />} />
      <Route path={"/login/student"} element={<SignInScreenStudent />} />
      <Route path={"/student/profile/:id"} element={<Profile />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/dashboard/profile/abindra"} element={<ProfileAbindra />} />
      <Route path={"/dashboard/profile/bijen"} element={<ProfileBijen />} />
      <Route path={"/dashboard/profile/shrutee"} element={<ProfileShrutee />} />
      <Route path={"/dashboard/profile/asmi"} element={<ProfileAsmi />} />
      <Route path={"/graph"} element={<BarChart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MainRoute;
