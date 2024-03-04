import { GetRequest, PostRequest } from "../plugins/https";
import { IAddStudent } from "../utils/interfaces/addstudent.interface";

export const APIGetStudents =()=>{
    return GetRequest("/student");
}
export const APIAddStudent=(data:IAddStudent)=>{
    return PostRequest("/student",data)
}

export const APIGetStudentById=(id:string)=>{
    return GetRequest("/student/"+id)
}

export const APIGetTotalStudents=()=>{
    return GetRequest("/student/totalstudents")
}

export const APICountStudentsByClass=()=>{
    return GetRequest("/student/countByClass")
}

export const APIGetTotalGenderCount=()=>{
    return GetRequest("/student/total-gender-count")
}

export const APIGetGenderByClass=()=>{
    return GetRequest("/student/gender-by-class")
}

