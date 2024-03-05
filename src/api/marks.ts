import { GetRequest, PostRequest } from "../plugins/https"
import { IPostMarks } from "../utils/interfaces/marks.interface"

export const APIGetMarksByStudentId=(id:string)=>{
    return GetRequest("/marks/student/"+id)
}

export const APIGetPercentageByStudentId=(id:string)=>{
    return GetRequest("/marks/percentage/"+id)
}

export const APIPostMarks=(data:IPostMarks[])=>{
    return PostRequest("/marks/allmarks",data)
}