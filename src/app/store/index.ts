import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersSlice from '../../features/slice/usersSlice'
import reposSlice from '../../features/slice/reposSlice'

const rootReducer = combineReducers({
    user: usersSlice,    
    repo: reposSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store