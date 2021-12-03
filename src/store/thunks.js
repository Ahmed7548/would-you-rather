import { questionAction } from "./questionSlice";
import { usersAction } from "./usersSlice";
import { authActions } from "./authUserSlice";
import * as API from "../utils/_DATA"

// fetch all data when app load
export const fetchAllData = () => {
    return  dispatch => {
        Promise.all([API._getQuestions(), API._getUsers()]).then(([questions, users]) => {
            const questionsArr = []
            const usersArr=[]
            for (let key in questions) {
                questionsArr.push({...questions[key],id:key})
            }
            for (let key in users) {
                const answersArr = []
                for (let id in users[key].answers) {
                    answersArr.push({choice:users[key].answers[id], questionId:id})
                }
                usersArr.push({...users[key],answers:answersArr})
            }
            console.log(usersArr);
            console.log(questionsArr);
            dispatch(questionAction.allQuestions(questionsArr))
            dispatch(usersAction.allUsers(usersArr))
            dispatch(authActions.loaded())
        })
    }
}


export const saveAnswer = (answer,qid,authedUser) => {
    return dispatch => {
        API._saveQuestionAnswer({
            answer,qid,authedUser
        }).then((resolve) => {
            console.log(resolve);
            dispatch(questionAction.addAnswerToQuestion({
                answer,qid,authedUser
            }))
            dispatch(usersAction.addAnswerToUser({
                answer,qid,authedUser
            }))
            dispatch(authActions.addAnswerToUser({
                answer,qid
            }))
        })
    }
}


export const addQuestion = (optionOneText,optionTwoText,author) => {
    return dispatch => {
        API._saveQuestion({ optionOneText, optionTwoText, author }).then(question => {
            dispatch(questionAction.addNewQuestion(question))
            dispatch(usersAction.AddQuestionToUser({
                author: question.author,
                id:question.id
            }))
            dispatch(authActions.addQuestionToUser(question.id))
        })
    }
}