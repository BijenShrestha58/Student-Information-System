import { GetRequest } from "../plugins/https"

export const APIGetMarksByStudentId=(id:string)=>{
    return GetRequest("/marks/student/"+id)
}

export const APIGetPercentageByStudentId=(id:string)=>{
    return GetRequest("/marks/percentage/"+id)
}