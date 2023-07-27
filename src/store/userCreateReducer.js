const initialState = {
  nickName: '',
  name: '',
  surName: '',
  gender: '',
  age: ''
}

export const userCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const updateUser = payload => ({ type: 'UPDATE_USER', payload })
