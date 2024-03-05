import { GetRequest } from "../plugins/https";

export const APIGetSubjectByStudentId=(id:string)=>{
    return GetRequest("subject/student/"+id);
}
