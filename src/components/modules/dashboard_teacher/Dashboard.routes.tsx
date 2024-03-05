import { Navigate, Route, Routes } from "react-router-dom";
import { AddStudents } from "../../../pages/teacher/addstudents";
import { ManageStudents } from "../../../pages/teacher/managestudents";
import { AddTeachers } from "../../../pages/teacher/addteachers";
import { ManageTeachers } from "../../../pages/teacher/manageteachers";
import Profile from "../../../pages/profile";
import TeacherProfile from "../../../pages/teacherprofile";
import { MarksTable } from "../../../pages/teacher/markstable";
import { AttendanceLogsTable } from "../../../pages/teacher/attendancelogs";
import { AttendanceTable } from "../../../pages/teacher/attendancetable";
import { TeacherDashboardPage } from "../../../pages/teacher/teacherdashboard";
export const DashboardRoutes = () => {
  const DashboardRoutesList = [
    { path: "/", element: <TeacherDashboardPage /> },
    { path: "/addstudents", element: <AddStudents /> },
    { path: "/managestudents", element: <ManageStudents /> },
    { path: "/addteachers", element: <AddTeachers /> },
    { path: "/manageteachers", element: <ManageTeachers /> },
    { path: "/profile/:id", element: <Profile /> },
    { path: "/teacherprofile/:id", element: <TeacherProfile /> },
    { path: "/marks/:id", element: <MarksTable /> },
    { path: "/attendance-logs/:id", element: <AttendanceLogsTable /> },
    { path: "/attendance-table/:id", element: <AttendanceTable /> },
    { path: "*", element: <Navigate to="./" replace /> },
  ];
  return (
    <>
      <div className="overflow-auto">
        <Routes>
          {DashboardRoutesList.map((v: any, key) => (
            <Route key={key} path={v.path} element={v.element} index={true} />
          ))}
        </Routes>
      </div>
    </>
  );
};
