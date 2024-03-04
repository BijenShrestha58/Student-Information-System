import { useParams } from "react-router";
import { APIGetStudentById } from "../api/student";
import { useEffect, useState } from "react";
import { DateFormatter } from "../utils/helpers/dateformatter";
import { CapitalizeFirstLetter } from "../utils/helpers/capitalize";

const Profile = () => {
  const { id = "" } = useParams();
  const [student, setStudent] = useState({});
  const getStudentDetails = async () => {
    const res = await APIGetStudentById(id);
    setStudent(res.data);
  };
  useEffect(() => {
    getStudentDetails();
  }, [id]);

  console.log(student);
  return (
    <div className="py-8 px-20 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold lg:text-4xl md:text-xl text-base">
          Profile
        </div>
        <a
          href="/edit-profile"
          className="text-blue-900 bg-gray-300 hover:text-white hover:bg-blue-900 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-lg no-underline"
        >
          Edit Profile
        </a>
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
            <div>title</div>
          </div>
          <div className="rounded bg-white border w-full h-1/2 p-2 font-semibold">
            <div>title</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
