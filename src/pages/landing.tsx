import { useNavigate } from "react-router";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-4xl font-bold mb-8">
        Welcome to Student Information System
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-2xl">
        <div
          className="p-8 border rounded-md transform transition-transform hover:-translate-y-1 duration-300 cursor-pointer bg-blue-600 hover:bg-blue-700"
          onClick={() => navigate("/login/admin")}
        >
          Login as Admin
        </div>
        <div
          className="p-8 border rounded-md transform transition-transform hover:-translate-y-1 duration-300 cursor-pointer bg-purple-600 hover:bg-purple-700"
          onClick={() => navigate("/login/teacher")}
        >
          Login as Teacher
        </div>
        <div
          className="p-8 border rounded-md transform transition-transform hover:-translate-y-1 duration-300 cursor-pointer bg-indigo-600 hover:bg-indigo-700"
          onClick={() => navigate("/login/student")}
        >
          Login as Student
        </div>
      </div>
    </div>
  );
};
