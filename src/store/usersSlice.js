import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        allUsers(state, action) {
            state.users=action.payload
        },
        addAnswerToUser(state, action) {
            state.users.forEach(user => {
                if (user.id === action.payload.authedUser) {
                    user.answers.push({
                        choice: action.payload.answer,
                        questionId:action.payload.qid
                    })
                }
            });
        },
        AddQuestionToUser(state,action) {
            state.users.forEach(user => {
                if (user.id === action.payload.author) {
                    user.questions.push(action.payload.id)
                }
            })
        }
    }
})

export const usersAction = userSlice.actions

export default userSlice