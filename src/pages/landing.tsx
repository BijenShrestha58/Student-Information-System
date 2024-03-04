import { useNavigate } from "react-router";
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-16">
      <div className="flex justify-center text-3xl font-bold">
        Welcome to Student Information System
      </div>
      <div className="flex m-40 justify-around">
        <div
          className="py-8 px-16 border rounded hover:-translate-y-1 duration-75 cursor-pointer"
          onClick={() => navigate("/login/admin")}
        >
          Login as Admin
        </div>
        <div
          className="py-8 px-16 border rounded hover:-translate-y-1 duration-75 cursor-pointer"
          onClick={() => navigate("/login/teacher")}
        >
          Login as Teacher
        </div>
        <div
          className="py-8 px-16 border rounded hover:-translate-y-1 duration-75 cursor-pointer"
          onClick={() => navigate("/login/student")}
        >
          Login as Student
        </div>
      </div>
    </div>
  );
};
