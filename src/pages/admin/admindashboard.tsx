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
import { calculateSliceRange, separateArrays } from "../../utils/helpers/array";
import { LineChart } from "../../components/partials/LineChart";
import {
  APIGetAttendanceByDate,
  APIGetTopAttendeesByClass,
} from "../../api/attendance";
import { Bar } from "react-chartjs-2";

export const AdminDashboardPage = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [countByClass, setCountByClass] = useState<any>([]);
  const [countByGender, setCountByGender] = useState<any>([]);
  const [countGenderByClass, setCountGenderByClass] = useState<any>([]);
  const [attendees, setAttendees] = useState<any>([]);
  const [attendanceByDate, setAttendanceByDate] = useState<any>([]);

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

  const getAttendees = async () => {
    try {
      const res = await APIGetTopAttendeesByClass();
      setAttendees(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getAttendanceByDate = async () => {
    try {
      const res = await APIGetAttendanceByDate();
      setAttendanceByDate(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    totalStudentCount();
    studentsByClass();
    totalGenderCount();
    genderCountByClass();
    getAttendees();
    getAttendanceByDate();
  }, []);

  // interface ICountByClass {
  //   classid: number;
  //   count: string;
  // }

  // interface ICountByGender {
  //   gender: string;
  //   count: string;
  // }
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
    {
      category: "Present Yesterday",
      icon: "login",
      data: attendanceByDate[6] && attendanceByDate[6].totalAttendees,
    },
    {
      category: "Absent Yesterday",
      icon: "sentiment_dissatisfied",
      data: attendanceByDate[6] && attendanceByDate[6].totalAbsentees,
    },
  ];

  //Dummy data
  // const top6Attendants = [
  //   { studentName: "Alice", attendanceCount: 30 },
  //   { studentName: "Bob", attendanceCount: 28 },
  //   { studentName: "Charlie", attendanceCount: 26 },
  //   { studentName: "David", attendanceCount: 24 },
  //   { studentName: "Eva", attendanceCount: 22 },
  //   { studentName: "Frank", attendanceCount: 20 },
  // ];

  // const weeklyAbsent = [
  //   { day: "Monday", absentCount: 2 },
  //   { day: "Tuesday", absentCount: 3 },
  //   { day: "Wednesday", absentCount: 1 },
  //   { day: "Thursday", absentCount: 3 },
  //   { day: "Friday", absentCount: 2 },
  // ];

  // const { newArr1: topStudents, newArr2: attendanceCounts } = separateArrays(
  //   top6Attendants,
  //   "studentName",
  //   "attendanceCount"
  // );
  // const { newArr1: days, newArr2: absentCounts } = separateArrays(
  //   weeklyAbsent,
  //   "day",
  //   "absentCount"
  // );

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

  const topAttendeesByClass: Record<string, any[]> = {};

  for (const classKey in attendees) {
    if (attendees.hasOwnProperty(classKey)) {
      topAttendeesByClass[classKey] = (attendees as Record<string, any>)[
        classKey
      ].slice(0, 5);
    }
  }
  // Extract student names
  const studentNames = Object.values(topAttendeesByClass)
    .flat()
    .map((student) => `${student.firstName} ${student.lastName}`);

  const classLabels = Object.keys(topAttendeesByClass);
  const [selectedClass, setSelectedClass] = useState("1");

  const classData =
    topAttendeesByClass[selectedClass] &&
    topAttendeesByClass[selectedClass]
      .slice(0, 5)
      .map((student) => parseInt(student.presentCount, 10));

  const topAttendeesDatasets = [
    {
      label: `Top 5 Attendees - Class ${selectedClass}`,
      data: classData,
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.6)`,
    },
  ];

  const handleChangeClass = (event: any) => {
    setSelectedClass(event.target.value);
  };

  interface IAttendanceByClass {
    presentCount: number;
    absentCount: number;
  }

  const absentByClass =
    attendanceByDate[6] &&
    Object.values(attendanceByDate[6]?.attendanceByClass).map(
      (item: any) => item.absentCount
    );
  console.log(absentByClass);

  const absentYesterdayDatasets = [
    {
      label: `Absent Yesterday (${
        attendanceByDate[6] && attendanceByDate[6].totalAbsentees
      })`,
      data: absentByClass,
    },
  ];

  const { start, end } = calculateSliceRange(selectedClass);
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="h-1/5 bg-gray-700 px-20 pt-12 text-white flex flex-col w-full">
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
                <div>
                  <label>Select Class: </label>
                  <select value={selectedClass} onChange={handleChangeClass}>
                    {classLabels.map((classLabel) => (
                      <option key={classLabel} value={classLabel}>
                        Class {classLabel}
                      </option>
                    ))}
                  </select>
                  <Bar
                    data={{
                      labels: studentNames.slice(start, end + 1),
                      datasets: topAttendeesDatasets,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-4/12 h-full pl-1">
              <div className="  rounded bg-white border w-full h-full p-2 font-semibold flex flex-col items-center justify-center">
                Absent Yesterday
                <BarChart xAxis={classes} datasets={absentYesterdayDatasets} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
