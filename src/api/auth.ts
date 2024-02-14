import {GetRequest, PostRequest, PutRequest} from "../plugins/https";
import {ILoginUser, IRegisterUser, IUpdatePassword, IUserEmail} from "../utils/interfaces/LoginUser.interface";
import { IAddStudent } from "../utils/interfaces/addstudent.interface";
import { IAddTeacher } from "../utils/interfaces/addteacher.interface";

export const APIAuthenticateUser = (data: ILoginUser)=>{
    return PostRequest('user/login', data);
}

export const APIRegisterUser = (data: IRegisterUser)=>{
    return PostRequest('user/register', data);
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

export const APIGetMyDetails = ()=>{
    return GetRequest('user/me');
}

export const APIGetSDOHQuestions = ()=>{
    return GetRequest('/patient/getAllSdh')
}

export const APICreatePatient = (data:any)=>{
    return PostRequest('/patient',data)
}