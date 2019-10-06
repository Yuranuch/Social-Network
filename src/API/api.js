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

    followMe (userId) {
        return instanse.post(`follow/${userId}`, {})
    },
    UnfollowMe (userId) {
        return instanse.delete(`follow/${userId}`)
    }

}

export const profileAPI ={
    getStatus (userId) {
        return instanse.get(`profile/status/${userId}`)
    },
    setUserProfile (userId) {
        return instanse.get(`profile/`+userId)
    },
    updateStatus (status) {
        return instanse.put(`profile/status/`, {status: status})
    }
}








