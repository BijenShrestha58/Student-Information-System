import { Table } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  APIGetAttendanceLogsByStudentId,
  APIGetFinalAttendanceByStudentId,
} from "../../api/attendance";
import { APIGetStudentById } from "../../api/student";
import { IStudent } from "../../utils/interfaces/addstudent.interface";
import { Role } from "../../utils/constants/enums";

export const AttendanceTable = () => {
  interface IAttendanceData {
    id: number;
    date: string;
    attendance: "PRESENT" | "ABSENT";
    totalHours: number;
    remark: string | null;
    student: {
      id: number;
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: string;
      rollNo: string;
      guardianName: string;
      guardianPhone: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    };
  }
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [attendanceData, setAttendanceData] = useState<IAttendanceData[]>([]);
  const initialStudent: IStudent = {
    id: null!,
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    rollNo: "",
    guardianName: "",
    guardianPhone: "",
    address: "",
    createdAt: "",
    updatedAt: "",
    class: {
      id: null!,
      className: "",
    },
    user: {
      id: null!,
      username: "",
      role: Role.student,
      createdAt: "",
      updatedAt: "",
    },
  };
  const [student, setStudent] = useState<IStudent>(initialStudent);

  const getFinalAttendanceByStudentId = async () => {
    try {
      const res = await APIGetFinalAttendanceByStudentId("246");
      setAttendanceData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getStudentById = async () => {
    try {
      const res = await APIGetStudentById("246");
      setStudent(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFinalAttendanceByStudentId();
    getStudentById();
  }, []);
  console.log(attendanceData);

  const rows =
    attendanceData &&
    attendanceData.map((attendance) => (
      <Table.Tr>
        <Table.Td>{attendance.date}</Table.Td>
        <Table.Td>{attendance.attendance}</Table.Td>
        <Table.Td>{attendance.totalHours}</Table.Td>
        <Table.Td>{attendance.remark}</Table.Td>
      </Table.Tr>
    ));

  return (
    <div className="py-8 px-16 flex flex-col w-full ">
      <div className="flex w-4/5 justify-between mb-10 items-center">
        <div className=" font-bold text-2xl">
          {student.firstName} {student.lastName}
        </div>

        <div
          onClick={() => navigate("../profile/" + id)}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        >
          Back
        </div>
      </div>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Attendance</Table.Th>
            <Table.Th>Total Hours</Table.Th>
            <Table.Th>Remarks</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
