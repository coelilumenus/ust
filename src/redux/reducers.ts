import { Reducer } from "redux"
import { admin } from "../data/data.json"

const data = `${admin.login}:${admin.password}`

export const authReducer: Reducer = (state = false, action) => {
  switch (action.type) {
    case 'auth':
      return state = (data === action.value) ? true : false
    default: 
      return state
  }
}

export const loginReducer: Reducer = (state = '', action) => {
  switch (action.type) {
    case 'setLogin':
      return state = action.value
    default:
      return state
  }
}