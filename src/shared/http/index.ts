import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const API_URL = import.meta.env.VITE_APP_PUBLIC_URL

export const getUsers = (nickname: string): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: "GET",
        baseURL: `${API_URL}/users/${nickname}`,
    }

    return axios.request(options)
}

export const getRepos = (repo: string): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: "GET",
        baseURL: `${API_URL}/repos/${repo}`,
    }

    return axios.request(options)
}