import { Route, Routes } from "react-router-dom";
import { Dashboard } from "tabler-icons-react";
import { AdminDashboardPage } from "../../../pages/admin/admindashboard";
import { AddStudents } from "../../../pages/admin/addstudents";
import { ManageStudents } from "../../../pages/admin/managestudents";
import { AddTeachers } from "../../../pages/admin/addteachers";
import { ManageTeachers } from "../../../pages/admin/manageteachers";
import { AddSubjects } from "../../../pages/admin/addsubjects";
import { ManageSubjects } from "../../../pages/admin/managesubjects";
export const DashboardRoutes = () => {
  const DashboardRoutesList = [
    { path: "*", element: <AdminDashboardPage /> },
    { path: "/hello", element: <AdminDashboardPage /> },
    { path: "/addstudents", element: <AddStudents /> },
    { path: "/managestudents", element: <ManageStudents /> },
    { path: "/addteachers", element: <AddTeachers /> },
    { path: "/manageteachers", element: <ManageTeachers /> },
    { path: "/addsubjects", element: <AddSubjects /> },
    { path: "/managesubjects", element: <ManageSubjects /> },
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
