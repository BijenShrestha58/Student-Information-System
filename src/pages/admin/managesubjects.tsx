import {
  Autocomplete,
  Select,
  TextInput,
  Table,
  Checkbox,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { APIGetAllSubjects } from "../../api/subject";

export const ManageSubjects = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const [subjects, setSubjects] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 12;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentSubjects = subjects.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const getAllSubjects = async () => {
    try {
      const res = await APIGetAllSubjects();
      setSubjects(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllSubjects();
  }, []);
  console.log(subjects);
  const dummy = [
    {
      name: "Science",
      id: 1,
      class: "2",
    },
    {
      name: "Maths",
      id: 2,
      class: "8",
    },
    {
      name: "English",
      id: 3,
      class: "9",
    },
    {
      name: "Nepali",
      id: 4,
      class: "10",
    },
    {
      name: "Computer",
      id: 5,
      class: "5",
    },
  ];

  const rows = currentSubjects.map((v: any) => (
    <Table.Tr
      key={v.subjectName}
      bg={
        selectedRows.includes(v.subjectId)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        {/* <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(v.subjectId)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, v.subjectId]
                : selectedRows.filter((subjectId) => subjectId !== v.subjectId)
            )
          }
        /> */}
      </Table.Td>
      <Table.Td>{v.subjectId}</Table.Td>
      <Table.Td>{v.subjectName}</Table.Td>
      <Table.Td>{v.class.className}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <div className="h-screen w-full flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between" style={{ height: "10%" }}>
          <div className="font-semibold text-2xl ">Manage Subjects</div>
          <div className="font-semibold">Subject / All Subjects</div>
        </div>
        {/* <div className="flex items-end mb-4" style={{ height: "10%" }}>
          <div className="flex-grow pr-3">
            <Autocomplete
              label="Search by ID"
              placeholder="ID"
              limit={5}
              data={dummy.map((item) => ({
                label: `${item.id}`,
                value: `${item.id}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by Name"
              placeholder="Name"
              limit={5}
              data={dummy.map((item) => item.name)}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by Class"
              placeholder="Class"
              limit={5}
              data={dummy.map((item) => item.class)}
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
                  <Table.Th>Class</Table.Th>
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
                  indexOfLastStudent < selectedRows.length
                    ? "bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded"
                    : "hidden"
                }
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastStudent >= selectedRows.length}
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
