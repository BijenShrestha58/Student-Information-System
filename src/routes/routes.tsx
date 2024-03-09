import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard.layout";
import Profile from "../pages/profile";

import { SignInScreen } from "../pages/loginscreen";
import { BarChart } from "../components/partials/BarChart";
import { Landing } from "../pages/landing";
import { DashboardTeacherLayout } from "../layouts/dashboard_teacher.layout ";
import { SignInScreenTeacher } from "../pages/loginscreen_teacher";
import { SignInScreenStudent } from "../pages/loginscreen_student";
import { DashboardStudentLayout } from "../layouts/dashboard_student.layout";
import { MarksTable } from "../pages/student/markstable";
import { AttendanceTable } from "../pages/student/attendancetable";
import { AttendanceLogsTable } from "../pages/student/attendancelogs";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path={"/dashboard"} element={<DashboardLayout />} />
      <Route path={"/dashboard/*"} element={<DashboardLayout />} />
      <Route path={"/teacher"} element={<DashboardTeacherLayout />} />
      <Route path={"/teacher/*"} element={<DashboardTeacherLayout />} />
      <Route path={"/student"} element={<DashboardStudentLayout />} />
      {/* <Route path={"/student/*"} element={<DashboardStudentLayout />} /> */}
      <Route path={"/login/admin"} element={<SignInScreen />} />
      <Route path={"/login/teacher"} element={<SignInScreenTeacher />} />
      <Route path={"/login/student"} element={<SignInScreenStudent />} />
      <Route path={"/profile/:id"} element={<Profile />} />
      <Route path={"/profile"} element={<Profile />} />

      <Route path={"/graph"} element={<BarChart />} />
      <Route path={"/marks/:id"} element={<MarksTable />} />
      <Route path={"/attendance-table/:id"} element={<AttendanceTable />} />
      <Route path={"/attendance-logs/:id"} element={<AttendanceLogsTable />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default MainRoute;
