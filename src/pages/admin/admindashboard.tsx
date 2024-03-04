import { ActionIcon, Card, Menu } from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import { Icon } from "../../components/common/icons";
import {
  APICountStudentsByClass,
  APIGetGenderByClass,
  APIGetTotalGenderCount,
  APIGetTotalStudents,
} from "../../api/student";
import { useEffect, useState } from "react";
import { BarChart } from "../../components/partials/BarChart";
import { separateArrays } from "../../utils/helpers/array";
import { LineChart } from "../../components/partials/LineChart";
import { APIGetTopAttendeesByClass } from "../../api/attendance";

export const AdminDashboardPage = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [countByClass, setCountByClass] = useState<any>([]);
  const [countByGender, setCountByGender] = useState<any>([]);
  const [countGenderByClass, setCountGenderByClass] = useState<any>([]);
  const [topAttendees, setTopAttendees] = useState<any>([]);

  const totalStudentCount = async () => {
    try {
      const res = await APIGetTotalStudents();
      setTotalStudents(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const totalGenderCount = async () => {
    try {
      const res = await APIGetTotalGenderCount();
      setCountByGender(res.data);
      // console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const genderCountByClass = async () => {
    try {
      const res = await APIGetGenderByClass();
      setCountGenderByClass(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const studentsByClass = async () => {
    try {
      const res = await APICountStudentsByClass();
      setCountByClass(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTopAttendees = async () => {
    try {
      const res = await APIGetTopAttendeesByClass();
      setTopAttendees(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    totalStudentCount();
    studentsByClass();
    totalGenderCount();
    genderCountByClass();
    getTopAttendees();
  }, []);

  interface ICountByClass {
    classid: number;
    count: string;
  }

  interface ICountByGender {
    gender: string;
    count: string;
  }
  // const classes = countByClass.map((v: ICountByClass) => v.classid);
  // const studentNumbers = countByClass.map((v: ICountByClass) =>
  //   parseInt(v.count, 10)
  // );
  const { newArr1: classes, newArr2: studentNumbers } = separateArrays(
    countByClass,
    "classid",
    "count"
  );

  const { newArr1: gender, newArr2: genderNumbers } = separateArrays(
    countByGender,
    "gender",
    "count"
  );

  const cardItems = [
    { category: "Total Students", icon: "person", data: totalStudents },
    { category: "Present Today", icon: "login", data: "213" },
    { category: "Absent Today", icon: "sentiment_dissatisfied", data: "22" },
  ];

  //Dummy data
  const top6Attendants = [
    { studentName: "Alice", attendanceCount: 30 },
    { studentName: "Bob", attendanceCount: 28 },
    { studentName: "Charlie", attendanceCount: 26 },
    { studentName: "David", attendanceCount: 24 },
    { studentName: "Eva", attendanceCount: 22 },
    { studentName: "Frank", attendanceCount: 20 },
  ];

  const weeklyAbsent = [
    { day: "Monday", absentCount: 2 },
    { day: "Tuesday", absentCount: 3 },
    { day: "Wednesday", absentCount: 1 },
    { day: "Thursday", absentCount: 3 },
    { day: "Friday", absentCount: 2 },
  ];

  const { newArr1: topStudents, newArr2: attendanceCounts } = separateArrays(
    top6Attendants,
    "studentName",
    "attendanceCount"
  );
  const { newArr1: days, newArr2: absentCounts } = separateArrays(
    weeklyAbsent,
    "day",
    "absentCount"
  );

  interface IGenderData {
    gender: string;
    count: string;
    class: number;
  }

  const uniqueGenders = [
    ...new Set(
      countGenderByClass &&
        countGenderByClass.map((item: IGenderData) => item.gender)
    ),
  ];

  // Create datasets
  const genderDatasets =
    uniqueGenders &&
    uniqueGenders.map((gender, index) => {
      return {
        label: `${gender} (${genderNumbers[index]})`,
        data:
          countGenderByClass &&
          countGenderByClass
            .filter((item: IGenderData) => item.gender === gender)
            .map((item: IGenderData) => parseInt(item.count, 10)),
        backgroundColor: gender === "Male" ? "blue" : "pink",
      };
    });

  const countByClassDatasets = [
    { label: "Students by Class", data: studentNumbers },
  ];

  const topAttendeesDatasets = "";
  console.log(topAttendees);
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="h-1/5 bg-gray-700 px-20 pt-12 text-white flex flex-col w-full flex-col">
          <div className="mb-10"></div>
          <div className="flex h-20">
            {cardItems?.map((v, key) => (
              <div
                className={`${
                  key % 2 === 0
                    ? "bg-white text-gray-500"
                    : "bg-blue-500 text-white"
                } rounded p-2 ${
                  key !== 2 ? "mr-4" : ""
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
              <div className=" rounded bg-white border w-full h-full p-2 font-semibold flex flex-col items-center justify-center">
                Total Attendance Report
                <LineChart />
              </div>
            </div>
            <div className="w-4/12 h-full pl-1">
              <div className="rounded bg-white border w-full h-full p-2 font-semibold flex flex-col items-center justify-center">
                Students By Class
                <BarChart xAxis={classes} datasets={countByClassDatasets} />
              </div>
            </div>
          </div>
          <div className="h-1/2 w-full flex mt-2">
            <div className="w-4/12 h-full pr-1">
              <div className="rounded bg-white border w-full h-full p-2 font-semibold flex flex-col items-center justify-center">
                Students By Gender
                <BarChart xAxis={classes} datasets={genderDatasets} />
              </div>
            </div>
            <div className="w-4/12 h-full pl-1  pr-1">
              <div className=" rounded bg-white border w-full h-full p-2 font-semibold flex flex-col items-center justify-center">
                Top 6 Attendants
                <BarChart />
              </div>
            </div>
            <div className="w-4/12 h-full pl-1">
              <div className="  rounded bg-white border w-full h-full p-2 font-semibold flex flex-col items-center justify-center">
                Weekly Absent
                <BarChart
                  xAxis={days}
                  yAxis={absentCounts}
                  label="Weekly absent for Grade 8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
