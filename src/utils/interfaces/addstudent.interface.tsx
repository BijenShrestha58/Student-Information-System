import { Role } from "../constants/enums";

export interface IAddStudent {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  rollNo: string;
  class: string;
  guardianName: string;
  guardianPhone: string;
  address: string;
  username: string;
  password: string;
}

export interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  rollNo: string;
  guardianName: string;
  guardianPhone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  class: {
    id: number;
    className: string;
  };
  user: {
    id: number;
    username: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
  };
}
