import { Select, TextInput } from "@mantine/core";

export const AddSubjects = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between" style={{ height: "10%" }}>
          <div className="font-semibold text-2xl ">Add Subjects</div>
          <div className="font-semibold">Subjects / Add Subjects</div>
        </div>
        <div className="rounded-3xl p-8 bg-white flex flex-col">
          <div className="font-semibold text-xl mb-8">Subject Information</div>
          <form className="flex flex-col">
            <div className="flex mb-6">
              <div className="w-2/6 pr-2">
                <TextInput
                  label="Subject ID"
                  withAsterisk
                  placeholder="Enter Subject ID"
                />
              </div>
              <div className="w-2/6 pr-2 pl-2">
                <TextInput
                  label="Subject Name"
                  withAsterisk
                  placeholder="Enter Subject Name"
                />
              </div>
              <div className="w-2/6 pl-2">
                <Select
                  label="Class"
                  withAsterisk
                  placeholder="Select Class"
                  data={["1", "2", "3", "4", "5"]}
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
