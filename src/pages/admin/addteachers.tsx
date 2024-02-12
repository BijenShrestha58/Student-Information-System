import { Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export const AddTeachers = () => {
  return (
    <>
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
                  label="Teacher ID"
                  withAsterisk
                  placeholder="Enter Teacher ID"
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput label="Name" withAsterisk placeholder="Enter Name" />
              </div>
              <div className="w-2/6 pl-2">
                <Select
                  label="Gender"
                  withAsterisk
                  placeholder="Select Gender"
                  data={["Male", "Female"]}
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
                  label="Phone Number"
                  withAsterisk
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="w-2/6 pl-2">
                <DateInput
                  label="Joining Date"
                  withAsterisk
                  placeholder="Enter Joining Date"
                />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Qualification"
                  withAsterisk
                  placeholder="Enter qualification"
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Experience"
                  withAsterisk
                  placeholder="Enter experience"
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
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Email ID"
                  withAsterisk
                  placeholder="Enter Email ID"
                />
              </div>
              <div className="w-2/6 pl-2">
                <TextInput
                  label="Password"
                  withAsterisk
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Re-enter Password"
                  withAsterisk
                  placeholder="Re-enter Password"
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
                />
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput label="City" withAsterisk placeholder="Enter City" />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="State"
                  withAsterisk
                  placeholder="Enter State"
                />
              </div>
              <div className="w-2/6 pl-2">
                <TextInput
                  label="Zip Code"
                  withAsterisk
                  placeholder="Enter Zip Code"
                />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Country"
                  withAsterisk
                  placeholder="Enter Country"
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
