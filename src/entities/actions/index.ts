import { createAsyncThunk } from '@reduxjs/toolkit'
import { USERS, REPOS } from '../../features/constant'
import { getRepos, getUsers } from '../../shared/http'
import { IRepos, IUser } from '../../app/types'

export const fetchGitUsers = createAsyncThunk<IUser, string, {rejectValue: string | unknown}>(
    USERS,
    async(nickname: string, {rejectWithValue}) => {
        try {
            const response = await getUsers(nickname)
            return response.data
        } catch(error) {
            rejectWithValue(error)
        }
    }
)

export const fetchGitRepos = createAsyncThunk<IRepos, string, {rejectValue: string | unknown}>(
    REPOS,
    async(repo: string, {rejectWithValue}) => {
        try {
            const response = await getRepos(repo)
            return response.data
        } catch(error) {
            rejectWithValue(error)
        }
    }
)