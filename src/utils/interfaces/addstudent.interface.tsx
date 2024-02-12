import { ILoginUser } from "./LoginUser.interface.ts";
import { IClass } from "./class.interface.tsx";

export interface IAddStudent {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  rollNo: string;
  class: IClass;
  guardianName: string;
  guardianPhone: string;
  address: string;
  user: ILoginUser;
}
