import { useParams } from "react-router";
import { APIGetTeacherById } from "../api/teacher";
import { useEffect, useState } from "react";
import { DateFormatter } from "../utils/helpers/dateformatter";
import { CapitalizeFirstLetter } from "../utils/helpers/capitalize";

const TeacherProfile = () => {
  const { id = "" } = useParams();
  const [teacher, setTeacher] = useState({});
  const getTeacherDetails = async () => {
    const res = await APIGetTeacherById(id);
    setTeacher(res.data);
  };
  useEffect(() => {
    getTeacherDetails();
  }, [id]);

  console.log(teacher);
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
                {teacher.firstName} {teacher.lastName}
              </div>
              <button className="text-red-600 bg-red-300 hover:text-white hover:bg-red-300 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-3xl">
                {teacher.user?.role &&
                  CapitalizeFirstLetter(teacher.user?.role)}
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 mb-2">BASIC DETAILS</div>
            <div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Id:</div>
                <div className="text-base font-bold w-1/2">{teacher.id}</div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Username:</div>
                <div className="text-base font-bold w-1/2">
                  {teacher.user?.username}{" "}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Email:</div>
                <div className="text-base font-bold w-1/2">{teacher.email}</div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Joining Date</div>
                <div className="text-base font-bold w-1/2">
                  {DateFormatter(teacher.joiningDate)}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Date of Birth:</div>
                <div className="text-base font-bold w-1/2">
                  {DateFormatter(teacher.dateOfBirth)}{" "}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Gender:</div>
                <div className="text-base font-bold w-1/2">
                  {teacher.gender}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Qualification:</div>
                <div className="text-base font-bold w-1/2">
                  {teacher.qualification}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Experience:</div>
                <div className="text-base font-bold w-1/2">
                  {teacher.experience} years
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-1/2">Address:</div>
                <div className="text-base font-bold w-1/2">
                  {teacher.address?.address}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-1/2 px-8 flex flex-col"></section>
      </div>
    </div>
  );
};

export default TeacherProfile;
