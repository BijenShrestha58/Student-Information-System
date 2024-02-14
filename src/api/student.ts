import { GetRequest, PostRequest } from "../plugins/https";
import { IAddStudent } from "../utils/interfaces/addstudent.interface";

export const APIGetStudents =()=>{
    return GetRequest("student");
}
export const APIAddStudent=(data:IAddStudent)=>{
    return PostRequest("/student",data)
}