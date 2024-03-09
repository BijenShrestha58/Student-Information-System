import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { LeftScreen } from "../components/modules/auth/Left.screen";
import { ILoginUser } from "../utils/interfaces/LoginUser.interface";
import { Role } from "../utils/constants/enums";
import { authenticateUser } from "../store/modules/auth/actions";
import { useDispatch } from "react-redux";
// import { APIGetMyDetails } from "../api/auth";
import { saveUser } from "../utils/helpers/tokenStorage.helper";

export const SignInScreenTeacher = () => {
  const roleParam = useParams();
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const PasswordVisibilityHandler = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [user, setUser] = useState<ILoginUser>({
    username: "",
    password: "",
    // role: Role[roleParam.role as keyof typeof Role],
  });
  const dispatch: any = useDispatch();
  // console.log(user.role);
  const formHandler = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    // navigate("/dashboard");
    try {
      const res: any = await dispatch(authenticateUser(user));
      console.log(res);
      res ? navigate("/teacher") : console.log("Incorrect credentials");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="w-screen h-screen font-sans flex items-center justify-center relative bg-gradient-to-b from-blue-800 via-blue-400 to-blue-800">
      <LeftScreen />
      <div className="w-3/5 absolute right-0 h-full rounded-l-2xl bg-white px-24 py-10">
        <div className="text-3xl font-bold">Sign In</div>
        <div className="mt-3 mb-6">Sign in to your account.</div>
        <form onSubmit={submitForm}>
          <div className="container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border rounded p-2 mr-4 mb-4 w-full"
              onChange={formHandler}
            />
          </div>
          <div className="container">
            <span className="relative w-full">
              <input
                type={passwordVisibility ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border rounded p-2 w-full"
                onChange={formHandler}
              />
              <span
                className="absolute right-2 material-icons pt-2 cursor-pointer"
                onClick={PasswordVisibilityHandler}
              >
                {passwordVisibility ? "visibility_off" : "visibility"}
              </span>
            </span>
          </div>
          <input
            type="submit"
            value="SIGN IN"
            className="w-full bg-blue-500 text-white rounded py-2 cursor-pointer duration-100 hover:-translate-y-0.5 my-4"
          />
        </form>
      </div>
    </div>
  );
};
