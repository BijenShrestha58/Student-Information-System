import React, { useEffect, useState } from "react";
import { PasswordInput, Select, TextInput } from "@mantine/core";
// import { useFormHandler } from "../../utils/helpers/formHandler";
import { IAddStudent } from "../../utils/interfaces/addstudent.interface";
import { Role } from "../../utils/constants/enums";
import { DateInput } from "@mantine/dates";
import { APIGetClass } from "../../api/class";
import { APIAddStudent } from "../../api/student";
import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export const AddStudents = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: new Date("2000-01-01"),
    rollNo: "",
    class: "",
    guardianName: "",
    guardianPhone: "",
    address: "",
    username: "",
    password: "",
    role: Role.student,
  });
  const icon = <IconInfoCircle />;
  const formHandler = (e: any) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const selectHandler = (fieldName: string, value: any) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      [fieldName]: value,
    }));
  };

  const [successAlert, setSuccessAlert] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();
    console.log(student);
    try {
      const res = await APIAddStudent(student);
      setSuccessAlert(true);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(student);
  // const { formData, handleInputChange, handleSubmit, resetForm } =
  //   useFormHandler<IAddStudent>({ initialState: initialFormState });

  const [classes, setClasses] = useState([]);
  const getClass = async () => {
    try {
      const res = await APIGetClass();
      const classArray = res.data.map((v: any) => v.className);
      setClasses(classArray);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getClass();
  }, []);

  // const handleFileInputChange = (event) => {
  //   // Handle the selected file here
  //   const selectedFile = event.target.files[0];
  //   console.log("Selected File:", selectedFile);
  // };

  // const onSubmit = () => {
  //   // Handle form submission logic here, e.g., make an API call
  //   console.log("Form submitted with data:", formData);
  //   // Optionally, reset the form after submission
  //   resetForm();
  // };

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
      <div className="h-screen w-full flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between" style={{ height: "10%" }}>
          <div className="font-semibold text-2xl ">Add Students</div>
          <div className="font-semibold">Student / Add Students</div>
        </div>
        <div
          className="rounded-3xl p-8 bg-white flex flex-col"
          style={{ height: "90%" }}
        >
          <div className="font-semibold text-xl mb-8">Student Information</div>
          <form className="flex flex-col" onSubmit={submitForm}>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="First Name"
                  withAsterisk
                  placeholder="Enter First Name"
                  value={student.firstName}
                  name="firstName"
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Last Name"
                  withAsterisk
                  placeholder="Enter Last Name"
                  value={student.lastName}
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
                  value={student.dateOfBirth}
                  onChange={(value) => selectHandler("dateOfBirth", value)}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Roll Number"
                  withAsterisk
                  placeholder="Enter Roll Number"
                  value={student.rollNo}
                  name="rollNo"
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pl-2">
                <Select
                  label="Class"
                  withAsterisk
                  placeholder="Select Class"
                  data={classes}
                  value={student.class}
                  onChange={(value) => selectHandler("class", value)}
                />
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Guardian's Name"
                  withAsterisk
                  placeholder="Enter Guardian's Name"
                  value={student.guardianName}
                  name="guardianName"
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Guardian's Phone Number"
                  withAsterisk
                  placeholder="Enter Guardian's Phone Number"
                  type="number"
                  value={student.guardianPhone}
                  name="guardianPhone"
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pl-2">
                <TextInput
                  label="Address"
                  placeholder="Enter Address"
                  value={student.address}
                  name="address"
                  onChange={formHandler}
                />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Username"
                  withAsterisk
                  placeholder="Enter Username"
                  name="username"
                  value={student.username}
                  onChange={formHandler}
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <PasswordInput
                  label="Password"
                  withAsterisk
                  placeholder="Enter Password"
                  name="password"
                  value={student.password}
                  onChange={formHandler}
                />
              </div>
            </div>
            {/* <div className="flex font-semibold">Upload Student Photo</div>
            <label
              htmlFor="fileInput"
              className="text-white bg-black rounded-lg px-3 py-1 w-28 mb-6 mt-3 hover:-translate-y-0.5 duration-200 flex justify-center"
            >
              Choose File
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} /> */}
            <button className="text-white text-lg bg-blue-600 rounded-lg py-2 w-40 hover:-translate-y-0.5 duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
