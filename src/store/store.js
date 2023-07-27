import { legacy_createStore as createStore } from 'redux'
import { userCreateReducer } from './userCreateReducer'

export const store = createStore(userCreateReducer)
