import {
  Alert,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { Role } from "../../utils/constants/enums";
import { APIAddTeacher } from "../../api/teacher";
import { IconInfoCircle } from "@tabler/icons-react";

export const AddTeachers = () => {
  const icon = <IconInfoCircle />;

  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: new Date("1970-01-01"),
    mobile: "",
    joiningDate: new Date("2000-01-01"),
    qualification: "",
    experience: 0,
    email: "",
    username: "",
    password: "",
    role: Role.teacher,
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    subjects: [{ subjectName: "Science", classId: "1" }],
  });

  const formHandler = (e: any) => {
    setTeacher(() => ({ ...teacher, [e.target.name]: e.target.value }));
  };

  const selectHandler = (fieldName: string, value: any) => {
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [fieldName]: value,
    }));
  };
  const [successAlert, setSuccessAlert] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();

    if (teacher.password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const res = await APIAddTeacher(teacher);
      setSuccessAlert(true);
    } catch (e) {
      console.log(e);
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(teacher);
  return (
    <>
      {successAlert && (
        <Alert
          variant="filled"
          color="green"
          withCloseButton
          closeButtonLabel="Dismiss"
          title="Student created successfully!"
          icon={icon}
          onClose={() => setSuccessAlert(false)}
        ></Alert>
      )}
      <div className="h-full w-full flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between mb-8">
          <div className="font-semibold text-2xl ">Add Teachers</div>
          <div className="font-semibold">Teachers / Add Teachers</div>
        </div>
        <div className="rounded-3xl p-8 bg-white flex flex-col">
          <div className="font-semibold text-xl mb-8">Basic Details</div>
          <form className="flex flex-col">
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="First Name"
                  withAsterisk
                  placeholder="Enter First Name"
                  value={teacher.firstName}
                  name="firstName"
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Last Name"
                  withAsterisk
                  placeholder="Enter Last Name"
                  value={teacher.lastName}
                  name="lastName"
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pl-2">
                <Select
                  label="Gender"
                  withAsterisk
                  placeholder="Select Gender"
                  data={["Male", "Female"]}
                  onChange={(value) => selectHandler("gender", value)}
                />
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <DateInput
                  label="Date of Birth"
                  withAsterisk
                  placeholder="Enter Date of Birth"
                  value={teacher.dateOfBirth}
                  onChange={(value) => selectHandler("dateOfBirth", value)}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Phone Number"
                  withAsterisk
                  placeholder="Enter Phone Number"
                  value={teacher.mobile}
                  name="mobile"
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pl-2">
                <DateInput
                  label="Joining Date"
                  withAsterisk
                  placeholder="Enter Joining Date"
                  value={teacher.joiningDate}
                  onChange={(value) => selectHandler("joiningDate", value)}
                />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Qualification"
                  withAsterisk
                  placeholder="Enter qualification"
                  name="qualification"
                  value={teacher.qualification}
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <NumberInput
                  label="Experience"
                  withAsterisk
                  placeholder="Enter experience in years"
                  value={teacher.experience}
                  onChange={(value) => selectHandler("experience", value)}
                />
              </div>
            </div>
            <div className="flex text-xl font-semibold mb-4">Login Details</div>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Username"
                  withAsterisk
                  placeholder="Enter Username"
                  name="username"
                  value={teacher.username}
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Email"
                  withAsterisk
                  placeholder="Enter Email"
                  name="email"
                  value={teacher.email}
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pl-2">
                <PasswordInput
                  label="Password"
                  withAsterisk
                  placeholder="Enter Password"
                  name="password"
                  value={teacher.password}
                  onChange={formHandler}
                />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-2/6 pr-2">
                <PasswordInput
                  label="Re-enter Password"
                  withAsterisk
                  placeholder="Re-enter Password"
                  name="repassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex text-xl font-semibold mb-4">Address</div>
            <div className="flex mb-6">
              <div className="w-full">
                <TextInput
                  label="Address"
                  withAsterisk
                  placeholder="Enter Address"
                  name="address"
                  value={teacher.address}
                  onChange={formHandler}
                />
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="City"
                  withAsterisk
                  placeholder="Enter City"
                  name="city"
                  value={teacher.city}
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="State"
                  withAsterisk
                  placeholder="Enter State"
                  name="state"
                  value={teacher.state}
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pl-2">
                <TextInput
                  label="Zip Code"
                  withAsterisk
                  placeholder="Enter Zip Code"
                  name="zipCode"
                  value={teacher.zipCode}
                  onChange={formHandler}
                />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Country"
                  withAsterisk
                  placeholder="Enter Country"
                  name="country"
                  value={teacher.country}
                  onChange={formHandler}
                />
              </div>
            </div>
            <button className="text-white text-lg bg-blue-600 rounded-lg py-2 w-40 hover:-translate-y-0.5 duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
