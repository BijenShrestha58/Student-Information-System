import { GetRequest } from "../plugins/https"

export const APIGetTopAttendeesByClass=()=>{
    return GetRequest("final-attendance/top-attendance")
}