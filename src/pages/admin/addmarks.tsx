import { useNavigate, useParams } from "react-router";
import { APIGetSubjectByStudentId } from "../../api/subject";
import { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import { APIGetStudentById } from "../../api/student";
import { Role } from "../../utils/constants/enums";
import { IStudent } from "../../utils/interfaces/addstudent.interface";
import { IPostMarks } from "../../utils/interfaces/marks.interface";
import { APIPostMarks } from "../../api/marks"; // Import your API function to post marks

export const AddMarks = () => {
  interface ISubject {
    id: string;
    subjectName: string;
    fullMarks: string;
    passMarks: string;
  }

  const [marks, setMarks] = useState<{ [key: string]: number }>({});
  const { id = "" } = useParams();
  const [subjects, setSubjects] = useState<ISubject[]>([
    { id: "", subjectName: "", fullMarks: "", passMarks: "" },
  ]);

  const getSubjectByStudentId = async () => {
    try {
      const res = await APIGetSubjectByStudentId(id);
      setSubjects(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSubjectByStudentId();
    getStudentById();
  }, [id]);

  const navigate = useNavigate();

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

  const getStudentById = async () => {
    try {
      const res = await APIGetStudentById(id);
      setStudent(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [student, setStudent] = useState<IStudent>(initialStudent);

  const handleMarksChange = (subjectId: string, value: any) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [subjectId]: value,
    }));
    console.log(marks);
  };

  const handleFormSubmit = async () => {
    try {
      const marksData: IPostMarks[] = Object.keys(marks).map((subjectId) => ({
        student_id: Number(id),
        subjectName:
          subjects.find((subject) => subject.id == subjectId)?.subjectName ||
          "",
        classId: Number(student.class.id),
        academicYear: "2023",
        marksObtained: marks[subjectId],
      }));

      // Assuming APIPostMarks is your API function to submit marks data
      await APIPostMarks(marksData);
      console.log(marksData);
      // Handle success, e.g., show a success message or navigate somewhere
      alert("Marks submitted successfully");
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error submitting marks", error);
    }
  };

  const rows =
    subjects &&
    subjects.map((subject) => (
      <Table.Tr key={subject.id}>
        <Table.Td>{subject.subjectName}</Table.Td>
        <Table.Td>{subject.fullMarks}</Table.Td>
        <Table.Td>{subject.passMarks}</Table.Td>
        <Table.Td>
          <input
            className="border border-gray-300 rounded"
            type="number"
            onChange={(e) => handleMarksChange(subject.id, e.target.value)}
          />
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <div className="py-8 px-16 flex flex-col w-full ">
      <div className="flex w-4/5 justify-between mb-10 items-center">
        <div className=" font-bold text-2xl">
          {student.firstName} {student.lastName}
        </div>
        <div
          onClick={() => navigate("../managestudents")}
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
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600 w-24 mt-8"
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </div>
  );
};
