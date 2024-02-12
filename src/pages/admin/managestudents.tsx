import {
  Autocomplete,
  Select,
  TextInput,
  Table,
  Checkbox,
} from "@mantine/core";
import { useState } from "react";

export const ManageStudents = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const dummy = [
    { name: "Bijen", roll: 21, class: "8", phone: "9860301558" },
    { name: "Abindra", roll: 8, class: "8", phone: "9812421341" },
    { name: "Shrutee", roll: 74, class: "9", phone: "892148921" },
    { name: "Asmi", roll: 20, class: "10", phone: "9851091324" },
    { name: "Mihir", roll: 33, class: "5", phone: "9860123412" },
  ];
  const rows = dummy.map((v) => (
    <Table.Tr
      key={v.name}
      bg={
        selectedRows.includes(v.roll)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(v.roll)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, v.roll]
                : selectedRows.filter((roll) => roll !== v.roll)
            )
          }
        />
      </Table.Td>
      <Table.Td>{v.roll}</Table.Td>
      <Table.Td>{v.name}</Table.Td>
      <Table.Td>{v.class}</Table.Td>
      <Table.Td>{v.phone}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <div className="h-screen w-full flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between" style={{ height: "10%" }}>
          <div className="font-semibold text-2xl ">Manage Students</div>
          <div className="font-semibold">Student / All Students</div>
        </div>
        <div className="flex items-end mb-4" style={{ height: "10%" }}>
          <div className="flex-grow pr-3">
            <Autocomplete
              label="Search by Roll Number"
              placeholder="Roll Number"
              limit={5}
              data={dummy.map((item) => ({
                label: `${item.roll}`,
                value: `${item.roll}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by Name"
              placeholder="Name"
              limit={5}
              data={dummy.map((item) => ({
                label: `${item.name}`,
                value: `${item.name}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 pr-3">
            <Autocomplete
              label="Search by Phone Number"
              placeholder="Phone Number"
              limit={5}
              data={dummy.map((item) => ({
                label: `${item.phone}`,
                value: `${item.phone}`,
              }))}
            />
          </div>
          <div className="flex-grow pl-3 ">
            <button className="bg-blue-600 text-white text-sm font-bold px-7 py-2 rounded">
              SEARCH
            </button>
          </div>
        </div>
        <div
          className="rounded-3xl p-8 bg-white flex flex-col"
          style={{ height: "90%" }}
        >
          <div className="font-semibold text-xl mb-8">Students</div>
          <div className="">
            {" "}
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th />
                  <Table.Th>Roll No.</Table.Th>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Class</Table.Th>
                  <Table.Th>Phone Number</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
