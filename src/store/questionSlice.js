import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions:[]
}

const questionsSlice = createSlice({
    name: "questionsSlice",
    initialState,
    reducers: {
        allQuestions(state, action) {
            state.questions=action.payload
        },
        addAnswerToQuestion(state, action) {
            state.questions.forEach(question => {
                if (question.id === action.payload.qid) {
                    question[action.payload.answer].votes.push(action.payload.authedUser)
                }
            })
        },
        addNewQuestion(state, action) {
            state.questions.push(action.payload)
        }
    }
})

export const questionAction= questionsSlice.actions

export default questionsSlice