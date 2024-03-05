import { GetRequest } from "../plugins/https"

export const APIGetTopAttendeesByClass=()=>{
    return GetRequest("final-attendance/top-attendance")
}

export const APIGetAttendanceByDate=()=>{
    return GetRequest("final-attendance/AttendanceByDateAndClass")
}

export const APIGetAttendanceLogsByStudentId=(id:string)=>{
    return GetRequest("attendance-logs/student/"+id)
}

export const APIGetFinalAttendanceByStudentId=(id:string)=>{
    return GetRequest("final-attendance/student/"+id)
}