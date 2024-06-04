import { createSlice } from "@reduxjs/toolkit";
import { REPOS } from "../constant";
import { fetchGitRepos } from "../../entities/actions";
import { IRepos } from "../../app/types";

interface IReposSlice {
    repo: IRepos,
    isLoading: boolean,
    error: null | unknown
}

const initialState: IReposSlice = {
    repo: {
        name: '',
        stargazers_count: 0
    },
    isLoading: false,
    error: null
}

const reposSlice = createSlice({
    name: REPOS,
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchGitRepos.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchGitRepos.fulfilled, (state, action) => {
                state.repo = action.payload;
                state.isLoading = false;
                state.error = null
            })
            .addCase(fetchGitRepos.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.payload
            })
    },

})

export default reposSlice.reducer

