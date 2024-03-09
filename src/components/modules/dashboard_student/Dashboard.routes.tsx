import { Navigate, Route, Routes } from "react-router-dom";
import { ManageStudents } from "../../../pages/student/managestudents";
import Profile from "../../../pages/profile";
import { MarksTable } from "../../../pages/student/markstable";
import { AttendanceLogsTable } from "../../../pages/student/attendancelogs";
import { AttendanceTable } from "../../../pages/student/attendancetable";
import { StudentDashboardPage } from "../../../pages/student/studentdashboard";
export const DashboardRoutes = () => {
  const DashboardRoutesList = [
    // { path: "/", element: <StudentDashboardPage /> },
    { path: "/managestudents", element: <ManageStudents /> },
    { path: "/profile/:id", element: <Profile /> },
    { path: "./student/attendance-logs/:id", element: <AttendanceLogsTable /> },
    // { path: "./attendance-table/:id", element: <AttendanceTable /> },
    { path: "./marks/:id", element: <MarksTable /> },
    { path: "/attendance-logs/:id", element: <AttendanceLogsTable /> },
    { path: "/attendance-table/:id", element: <AttendanceTable /> },
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
