import { useNavigate, useParams } from "react-router";
import { APIGetStudentById } from "../api/student";
import { useEffect, useState } from "react";
import { DateFormatter } from "../utils/helpers/dateformatter";
import { CapitalizeFirstLetter } from "../utils/helpers/capitalize";
import { IStudent } from "../utils/interfaces/addstudent.interface";
import { Role } from "../utils/constants/enums";
import { APIGetPercentageByStudentId } from "../api/marks";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Calendar } from "@mantine/dates";

Chart.register(CategoryScale);

const ProfileAsmi = () => {
  const { id = "" } = useParams();
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
  interface IPercentageData {
    academicYear: string;
    percentage: string;
  }
  const [student, setStudent] = useState<IStudent>(initialStudent);
  const [percentageData, setPercentageData] = useState<IPercentageData[]>([
    { academicYear: "", percentage: "" },
  ]);
  const getPercentageByStudentId = async () => {
    try {
      const res = await APIGetPercentageByStudentId("248");
      setPercentageData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getStudentDetails = async () => {
    const res = await APIGetStudentById("248");
    setStudent(res.data);
  };
  useEffect(() => {
    getStudentDetails();
    getPercentageByStudentId();
  }, [id]);

  console.log(percentageData);

  return (
    <div className="py-8 px-20 h-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold lg:text-4xl md:text-xl text-base mr-16">
          Profile
        </div>
        <div
          className="text-blue-900 bg-gray-300 hover:text-white hover:bg-blue-900 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-lg no-underline mr-8"
          onClick={() => navigate("../marks/" + id)}
        >
          View Marks
        </div>
        <div
          className="text-blue-900 bg-gray-300 hover:text-white hover:bg-blue-900 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-lg no-underline mr-8"
          onClick={() => navigate("../attendance-logs/" + id)}
        >
          View attendance logs
        </div>
        <div
          className="text-blue-900 bg-gray-300 hover:text-white hover:bg-blue-900 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-lg no-underline"
          onClick={() => navigate("../attendance-table/" + id)}
        >
          View attendance report
        </div>
      </div>
      <div className="flex w-full h-full">
        <section className="w-1/2">
          {" "}
          <div className="flex items-center w-full mb-4">
            <div className="rounded-full overflow-hidden mr-2">
              <img
                src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
                alt="profile"
              />
            </div>
            <div>
              <div className="font-bold text-3xl mb-2">
                {student.firstName} {student.lastName}
              </div>
              <button className="text-red-600 bg-red-300 hover:text-white hover:bg-red-300 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-3xl">
                {student.user?.role &&
                  CapitalizeFirstLetter(student.user?.role)}
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 mb-2">BASIC DETAILS</div>
            <div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Roll Number:</div>
                <div className="text-base font-bold w-1/2">
                  {student.rollNo}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Class:</div>
                <div className="text-base font-bold w-1/2">
                  {student.class.className}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Username:</div>
                <div className="text-base font-bold w-1/2">
                  {student.user?.username}{" "}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">
                  Guardian's Name:
                </div>
                <div className="text-base font-bold w-1/2">
                  {student.guardianName}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">
                  Guardian's Phone Number:
                </div>
                <div className="text-base font-bold w-1/2">
                  {student.guardianPhone}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Date of Birth:</div>
                <div className="text-base font-bold w-1/2">
                  {DateFormatter(student.dateOfBirth)}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Gender:</div>
                <div className="text-base font-bold w-1/2">
                  {student.gender}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Address:</div>
                <div className="text-base font-bold w-1/2">
                  {student.address}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-1/2 px-8 flex flex-col">
          <div className="rounded bg-white border w-full h-1/2 p-2 font-semibold mb-2">
            <Line
              data={{
                labels: percentageData.map((item) => item.academicYear),
                datasets: [
                  {
                    label: "Percentage By Academic Year",
                    data: percentageData.map((item) => item.percentage),
                  },
                ],
              }}
            />
          </div>
          <div className="rounded bg-white border w-full h-1/2 p-2 font-semibold flex justify-center">
            <style>
              {`
          /* Your custom styling here */
          .mantine-Calendar-day[data-day="2024-03-02"] {
            background-color: green;
            color: white; /* Optional: Change text color for better visibility */
          }
        `}
            </style>
            <Calendar />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileAsmi;
