import * as axios from "axios";


const baseURL = 'https://social-network.samuraijs.com/api/1.0/';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "6408b3a3-6577-4f97-aa9e-f7b63990ec1a"
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}



