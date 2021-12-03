import { configureStore } from '@reduxjs/toolkit'
import authUserSlice from './authUserSlice'
import questionsSlice from './questionSlice'
import userSlice from './usersSlice'



const store = configureStore({
    reducer: {
        questions: questionsSlice.reducer,
        users: userSlice.reducer,
        authUser: authUserSlice.reducer
    }
})

export default store