import { Select, TextInput } from "@mantine/core";
import { useFormHandler } from "../../utils/helpers/formHandler";
import { IAddStudent } from "../../utils/interfaces/addstudent.interface";
import { Role } from "../../utils/constants/enums";
import { DateInput } from "@mantine/dates";
import { APIGetClass } from "../../api/class";
import { useEffect } from "react";

export const AddStudents = () => {
  const initialFormState: IAddStudent = {
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: new Date("1990-01-01"),
    rollNo: "",
    class: { className: "" },
    guardianName: "",
    guardianPhone: "",
    address: "",
    user: { username: "", password: "", role: Role.student },
  };
  const { formData, handleInputChange, handleSubmit, resetForm } =
    useFormHandler<IAddStudent>({ initialState: initialFormState });

  const onSubmit = () => {
    // Handle form submission logic here, e.g., make an API call
    console.log("Form submitted with data:", formData);
    // Optionally, reset the form after submission
    resetForm();
  };

  const getClass = async () => {
    try {
      const res = await APIGetClass();
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {}, []);
  console.log("");
  return (
    <>
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
          <form className="flex flex-col">
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="First Name"
                  withAsterisk
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Last Name"
                  withAsterisk
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
              </div>
              <div className="w-2/6 pl-2">
                <Select
                  label="Gender"
                  withAsterisk
                  placeholder="Select Gender"
                  data={["Male", "Female"]}
                  onChange={(value) => handleInputChange("gender", value)}
                />
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <DateInput
                  label="Date of Birth"
                  withAsterisk
                  placeholder="Enter Date of Birth"
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Roll Number"
                  withAsterisk
                  placeholder="Enter Roll Number"
                />
              </div>
              <div className="w-2/6 pl-2">
                <Select
                  label="Class"
                  withAsterisk
                  placeholder="Select Section"
                  data={["A", "B"]}
                />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-2/6 pr-2">
                <DateInput
                  label="Date of Birth"
                  withAsterisk
                  placeholder="Enter Date of Birth"
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Phone Number"
                  withAsterisk
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="w-2/6 pl-2">
                <TextInput label="Address" placeholder="Enter Address" />
              </div>
            </div>
            <div className="flex font-semibold">Upload Student Photo</div>
            <button className="text-white bg-black rounded-lg px-3 py-1 w-28 mb-6 mt-3 hover:-translate-y-0.5 duration-200">
              Choose File
            </button>
            <button className="text-white text-lg bg-blue-600 rounded-lg py-2 w-40 hover:-translate-y-0.5 duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
