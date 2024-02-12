import { GetRequest } from "../plugins/https";

export const APIGetClass =()=>{
    return GetRequest("class");
}