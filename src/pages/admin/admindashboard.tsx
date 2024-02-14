import { ActionIcon, Card, Menu } from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import { Icon } from "../../components/common/icons";

const cardItems = [
  { category: "Total Students", icon: "person", data: "1" },
  { category: "Present Today", icon: "login", data: "2" },
  { category: "Absent Today", icon: "sentiment_dissatisfied", data: "45" },
  { category: "Late Today", icon: "schedule", data: "11" },
];
export const AdminDashboardPage = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="h-1/5 bg-black px-20 pt-12 text-white flex flex-col w-full flex-col">
          <div className="mb-10">Hello Admin!</div>
          <div className="flex h-20">
            {cardItems.map((v, key) => (
              <div
                className={`${
                  key % 2 === 0
                    ? "bg-white text-gray-500"
                    : "bg-blue-500 text-white"
                } rounded p-2 ${
                  key !== 3 ? "mr-4" : ""
                } border border-gray-300 flex items-center  flex-grow relative h-20`}
              >
                <div className="material-icons text-blue-400 bg-gray-100 rounded p-3 m-2">
                  <Icon name={v.icon} />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-semibold">{v.data}</div>
                  <div className="text-sm font-semibold ">{v.category}</div>
                </div>

                <Menu withinPortal position="bottom-end" shadow="sm" withArrow>
                  <Menu.Target>
                    <ActionIcon
                      variant="subtle"
                      color={`${key % 2 === 0 ? "gray" : "white"}`}
                      style={{ right: 4, top: 4, position: "absolute" }}
                      className="hover:text-black duration-200"
                    >
                      <IconDots
                        style={{
                          width: 16,
                          height: 16,
                        }}
                      />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item
                      leftSection={
                        <IconFileZip style={{ width: 14, height: 14 }} />
                      }
                    >
                      Download zip
                    </Menu.Item>
                    <Menu.Item
                      leftSection={
                        <IconEye style={{ width: 14, height: 14 }} />
                      }
                    >
                      Preview all
                    </Menu.Item>
                    <Menu.Item
                      leftSection={
                        <IconTrash style={{ width: 14, height: 14 }} />
                      }
                      color="red"
                    >
                      Delete all
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            ))}
          </div>
        </div>
        <div className="h-4/5 px-20 bg-gray-100 flex flex-col">
          <div className="h-1/2 w-full flex mt-16">
            <div className="w-8/12 h-full pr-1">
              <div className=" rounded bg-white border w-full h-full p-2 font-semibold">
                Total Attendance Report
              </div>
            </div>
            <div className="w-4/12 h-full pl-1">
              <div className="rounded bg-white border w-full h-full p-2 font-semibold">
                Students By Class
              </div>
            </div>
          </div>
          <div className="h-1/2 w-full flex mt-2">
            <div className="w-4/12 h-full pr-1">
              <div className="rounded bg-white border w-full h-full p-2 font-semibold">
                Students By Gender
              </div>
            </div>
            <div className="w-4/12 h-full pl-1  pr-1">
              <div className=" rounded bg-white border w-full h-full p-2 font-semibold">
                Top 6 Attendants
              </div>
            </div>
            <div className="w-4/12 h-full pl-1">
              <div className="  rounded bg-white border w-full h-full p-2 font-semibold">
                Weekly Absent
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
