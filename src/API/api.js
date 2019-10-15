import * as axios from "axios";

const instanse=axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    authMe (){
        return instanse.get("auth/me")
    },

    followMe(userId) {
        return instanse.post(`follow/${userId}`, {})
    },
    UnfollowMe(userId) {
        return instanse.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    setUserProfile(userId) {
        return instanse.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instanse.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    loginMe (email, password,rememberMe=false) {
        return instanse.post("auth/login",{email, password,rememberMe})
    },
    logout () {
        return instanse.delete("auth/login")
    }
}








