import { Table } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { APIGetAttendanceLogsByStudentId } from "../../api/attendance";
import { APIGetStudentById } from "../../api/student";
import { IStudent } from "../../utils/interfaces/addstudent.interface";
import { Role } from "../../utils/constants/enums";

export const AttendanceLogsTable = () => {
  interface IAttendanceLogs {
    username: string;
    date: string;
    entrytime: string;
    exittime: string;
  }
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [attendanceLogsData, setAttendanceLogsData] = useState<
    IAttendanceLogs[]
  >([{ username: "", date: "", entrytime: "", exittime: "" }]);
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

  const getAttendanceLogsByStudentId = async () => {
    try {
      const res = await APIGetAttendanceLogsByStudentId(id);
      setAttendanceLogsData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getStudentById = async () => {
    try {
      const res = await APIGetStudentById(id);
      setStudent(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAttendanceLogsByStudentId();
    getStudentById();
  }, []);
  console.log(attendanceLogsData);

  const rows =
    attendanceLogsData &&
    attendanceLogsData.map((attendanceLogs) => (
      <Table.Tr>
        <Table.Td>{attendanceLogs.date}</Table.Td>
        <Table.Td>{attendanceLogs.entrytime}</Table.Td>
        <Table.Td>{attendanceLogs.exittime}</Table.Td>
      </Table.Tr>
    ));

  console.log(attendanceLogsData);
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
            <Table.Th>Entry Time</Table.Th>
            <Table.Th>Exit Time</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
