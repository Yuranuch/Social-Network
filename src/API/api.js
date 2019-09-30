import * as axios from "axios";

const instanse=axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}
})

export const getUsers = (currentPage, pageSize) => {
    return   instanse.get(`users?page=${currentPage}&count=${pageSize}`)
}

export const authMe = () => {
    return instanse.get("auth/me")
}

export const setUserProfile = (userId) => {
    return instanse.get(`profile/`+userId)
}

export const followMe = (userId)=> {
    return instanse.post(`follow/${userId}`, {})
}

export const UnfollowMe = (userId)=> {
    return instanse.delete(`follow/${userId}`)
}