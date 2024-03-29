import {GetRequest, PostRequest, PutRequest} from "../plugins/https";
import {ILoginUser, IRegisterUser, IUpdatePassword, IUserEmail} from "../utils/interfaces/LoginUser.interface";
import { IAddStudent } from "../utils/interfaces/addstudent.interface";
import { IAddTeacher } from "../utils/interfaces/addteacher.interface";

export const APIAuthenticateUser = (data: ILoginUser)=>{
    return PostRequest('/authentication', data);
}

export const APIForgetPassword = (data: IUserEmail)=>{
    return PutRequest('user/forget-password', data);
}

export const APIVerifyEmail = (data: IUserEmail)=>{
    return PostRequest('user/verify-email', data);
}

export const APIUpdatePassword = (data: IUpdatePassword)=>{
    return PutRequest('user/update-password',data);
}

// export const APIGetMyDetails = ()=>{
//     return GetRequest('user/me');
// }

