import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../constant";
import { fetchGitUsers } from "../../entities/actions";
import { IUser } from "../../app/types";

interface IUsersSlice {
    user: IUser,
    isLoading: boolean,
    error: unknown | null
}

const initialState: IUsersSlice = {
    user: {
        name: '',
        public_repos: 0
    },
    isLoading: false,
    error: null
}

const usersSlice = createSlice({
    name: USERS,
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchGitUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchGitUsers.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.error = null
            })
            .addCase(fetchGitUsers.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.payload
            })
    },

})

export default usersSlice.reducer

