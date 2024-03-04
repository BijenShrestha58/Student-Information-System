import {
  Autocomplete,
  Select,
  TextInput,
  Table,
  Checkbox,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { APIGetStudents } from "../../api/student";

export const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 12;

  const getStudents = async () => {
    try {
      const res = await APIGetStudents();
      setStudents(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(students);

  useEffect(() => {
    getStudents();
  }, []);

  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const rows = currentStudents.map((student: any) => (
    <Table.Tr
      key={student.id}
      bg={
        selectedRows.includes(student.rollNo)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(student.rollNo)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, student.rollNo]
                : selectedRows.filter((rollNo) => rollNo !== student.rollNo)
            )
          }
        />
      </Table.Td>
      <Table.Td>{student.rollNo}</Table.Td>
      <Table.Td
        onClick={() => navigate("../profile/" + student.id)}
        style={{ cursor: "pointer" }}
      >
        {student.firstName}
      </Table.Td>
      <Table.Td>{student.class.className}</Table.Td>
      <Table.Td>{student.guardianPhone}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <div className="h-screen w-full flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between" style={{ height: "10%" }}>
          <div className="font-semibold text-2xl ">Manage Students</div>
          <div className="font-semibold">Student / All Students</div>
        </div>
        {/* <div className="flex items-end mb-4" style={{ height: "10%" }}>
          <div className="flex-grow pr-3">
            <Autocomplete
              label="Search by rollNo Number"
              placeholder="rollNo Number"
              limit={5}
              data={students.map((student: any) => ({
                label: `${student.rollNo}`,
                value: `${student.rollNo}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by firstName"
              placeholder="firstName"
              limit={5}
              data={students.map((student: any) => ({
                label: `${student.firstName}`,
                value: `${student.firstName}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by Phone Number"
              placeholder="Phone Number"
              limit={5}
              data={students.map((student: any) => ({
                label: `${student.phone}`,
                value: `${student.phone}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 ">
            <button className="bg-blue-600 text-white text-sm font-bold px-7 py-2 rounded">
              SEARCH
            </button>
          </div>
        </div> */}
        <div
          className="rounded-3xl p-8 bg-white flex flex-col"
          style={{ height: "90%" }}
        >
          <div className="font-semibold text-xl mb-8">Students</div>
          <div className="">
            {" "}
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th />
                  <Table.Th>Roll No.</Table.Th>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Class</Table.Th>
                  <Table.Th>Phone Number</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>{" "}
            <div className="flex justify-center mt-4">
              <button
                className={
                  currentPage !== 1
                    ? "bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded mr-2"
                    : "hidden"
                }
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className={
                  indexOfLastStudent < students.length
                    ? "bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded"
                    : "hidden"
                }
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastStudent >= students.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
