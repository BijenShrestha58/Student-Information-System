import { useNavigate, useLocation } from "react-router-dom";
import { Accordion } from "@mantine/core";
export const DashboardSidebar = () => {
  const location = useLocation();
  const activePath = location.pathname;
  const navigate = useNavigate();
  console.log(activePath);
  const sideBarItemStyles =
    "text-sm hover:cursor-pointer hover:text-white hover:bg-blue-500 duration-200 rounded p-2";
  const activeStyles = "bg-blue-500 text-white";
  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Students",
      subItem: [
        { name: "Add students", path: "/addstudents" },
        { name: "Manage Students", path: "/managestudents" },
      ],
    },
    {
      label: "Teachers",
      subItem: [
        { name: "Add Teachers", path: "/addteachers" },
        { name: "Manage Teachers", path: "/manageteachers" },
      ],
    },
    {
      label: "Subjects",
      subItem: [
        { name: "Add Subjects", path: "/addsubjects" },
        { name: "Manage Subjects", path: "/managesubjects" },
      ],
    },
  ];
  return (
    <nav className="pt-4">
      <Accordion>
        {navItems.map((v, key) => {
          if (v.subItem) {
            return (
              <Accordion.Item key={v.label} value={v.label}>
                <Accordion.Control>{v.label}</Accordion.Control>
                {v.subItem.map((item, subKey) => {
                  const isActive = activePath.endsWith(item.path);
                  return (
                    <Accordion.Panel key={subKey}>
                      <div
                        className={`${sideBarItemStyles} ${
                          isActive ? `${activeStyles}` : ""
                        }`}
                        onClick={() => navigate(`.${item.path}`)}
                      >
                        {item.name}
                      </div>
                    </Accordion.Panel>
                  );
                })}
              </Accordion.Item>
            );
          }
          const isActive = activePath.endsWith(v.path);

          return (
            <>
              <div
                className={`${
                  isActive ? `${activeStyles}` : ""
                } border-b pl-4 py-2 hover:cursor-pointer hover:text-white rounded hover:bg-blue-500 duration-200 border-gray-200`}
                onClick={() => navigate(`.${v.path}`)}
              >
                {v.label}
              </div>
            </>
          );
        })}
      </Accordion>
    </nav>
  );
};
