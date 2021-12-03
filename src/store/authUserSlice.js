import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataLoaded: false,
  logged: false,
  authUser: {},
};

const authUserSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loaded(state) {
      state.dataLoaded = true;
    },
    addAuthUser(state, action) {
      state.authUser = action.payload;
      state.logged = true;
    },
    loggOut(state) {
      state.authUser = {};
      state.logged = false;
    },
    addAnswerToUser(state, action) {
      state.authUser.answers.push({
        choice: action.payload.answer,
        questionId: action.payload.qid,
      });
      },
      addQuestionToUser(state, action) {
        state.authUser.questions.push(action.payload)
    }
  },
});

export const authActions = authUserSlice.actions;

export default authUserSlice;
