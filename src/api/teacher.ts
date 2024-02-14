import { GetRequest, PostRequest } from "../plugins/https";
import { IAddTeacher } from "../utils/interfaces/addteacher.interface";

export const APIGetTeachers =()=>{
    return GetRequest("teacher");
}
export const APIAddTeacher=(data:IAddTeacher)=>{
    return PostRequest("/teacher", data)
}