import { Select, Table } from "@mantine/core";
import { APIGetMarksByStudentId } from "../../api/marks";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { IStudentResult } from "../../utils/interfaces/marks.interface";

export const MarksTable = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [marksData, setMarksData] = useState<IStudentResult>({
    studentid: 0,
    firstname: "",
    lastname: "",
    classname: "",
    academicYears: {},
  });
  const [selectedYear, setSelectedYear] = useState<string | null>("2023");
  const GetMarksById = async () => {
    try {
      const res = await APIGetMarksByStudentId(id);
      setMarksData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    GetMarksById();
  }, []);
  const subjectsData = selectedYear && marksData.academicYears[selectedYear];

  const rows =
    subjectsData &&
    subjectsData.map((subject) => (
      <Table.Tr>
        <Table.Td>{subject.subjectname}</Table.Td>
        <Table.Td>{subject.fullmarks}</Table.Td>
        <Table.Td>{subject.passmarks}</Table.Td>
        <Table.Td>{subject.marksobtained}</Table.Td>
        <Table.Td>{subject.result}</Table.Td>
      </Table.Tr>
    ));

  const yearsArray = Object.keys(marksData.academicYears);
  console.log(subjectsData);
  return (
    <div className="py-8 px-16 flex flex-col w-full ">
      <div className="flex w-4/5 justify-between mb-10 items-center">
        <div className=" font-bold text-2xl">
          {marksData.firstname} {marksData.lastname}
        </div>
        <Select
          label="Year"
          placeholder="Academic Year"
          limit={10}
          data={yearsArray}
          value={selectedYear}
          onChange={setSelectedYear}
          allowDeselect={false}
        />
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
            <Table.Th>Subject Name</Table.Th>
            <Table.Th>Full Marks</Table.Th>
            <Table.Th>Pass Marks</Table.Th>
            <Table.Th>Marks Obtained</Table.Th>
            <Table.Th>Result</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
