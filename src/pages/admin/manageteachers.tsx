import {
  Autocomplete,
  Select,
  TextInput,
  Table,
  Checkbox,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { APIGetTeachers } from "../../api/teacher";
import { useNavigate } from "react-router";

export const ManageTeachers = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 10;

  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = teachers.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  const getTeachers = async () => {
    try {
      const res = await APIGetTeachers();
      setTeachers(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const rows = currentTeachers.map((teacher: any) => (
    <Table.Tr
      key={teacher.id}
      bg={
        selectedRows.includes(teacher.id)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(teacher.id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, teacher.id]
                : selectedRows.filter((id) => id !== teacher.id)
            )
          }
        />
      </Table.Td>
      <Table.Td>{teacher.id}</Table.Td>
      <Table.Td
        onClick={() => navigate("../teacherprofile/" + teacher.id)}
        style={{ cursor: "pointer" }}
      >
        {teacher.firstName} {teacher.lastName}
      </Table.Td>
      <Table.Td>{teacher.qualification}</Table.Td>
      <Table.Td>{teacher.mobile}</Table.Td>
      <Table.Td>{teacher.address.address}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <div className="h-screen w-full flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between" style={{ height: "10%" }}>
          <div className="font-semibold text-2xl ">Manage Teachers</div>
          <div className="font-semibold">Teacher / All Teachers</div>
        </div>
        {/* <div className="flex items-end mb-4" style={{ height: "10%" }}>
          <div className="flex-grow pr-3">
            <Autocomplete
              label="Search by ID"
              placeholder="ID"
              limit={5}
              data={teachers.map((teacher: any) => ({
                label: `${teacher.id}`,
                value: `${teacher.id}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by Name"
              placeholder="Name"
              limit={5}
              data={teachers.map((teacher: any) => ({
                label: `${teacher.firstName}`,
                value: `${teacher.firstName}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by Phone Number"
              placeholder="Phone Number"
              limit={5}
              data={teachers.map((teacher: any) => ({
                label: `${teacher.mobile}`,
                value: `${teacher.mobile}`,
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
          <div className="font-semibold text-xl mb-8">Teachers</div>
          <div className="">
            {" "}
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th />
                  <Table.Th>ID</Table.Th>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Qualification</Table.Th>
                  <Table.Th>Phone Number</Table.Th>
                  <Table.Th>Address</Table.Th>
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
                  indexOfLastTeacher < teachers.length
                    ? "bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded"
                    : "hidden"
                }
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastTeacher >= teachers.length}
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
