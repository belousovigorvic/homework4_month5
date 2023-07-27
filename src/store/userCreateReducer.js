const initialState = {
  nickName: '',
  name: '',
  surName: '',
  patronymic: '',
  gender: '',
  age: ''
};

export const userCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NICKNAME':
      return { ...state, nickName: action.payload };
    case 'NAME':
      return { ...state, name: action.payload };
    case 'SURNAME':
      return { ...state, surName: action.payload };
    case 'PATRONYMIC':
      return { ...state, patronymic: action.payload };
    case 'GENDER':
      return { ...state, gender: action.payload };
    case 'AGE':
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

export const setNickName = (payload) => ({ type: 'NICKNAME', payload });
export const setName = (payload) => ({ type: 'NAME', payload });
export const setSurName = (payload) => ({ type: 'SURNAME', payload });
export const setPatronymic = (payload) => ({ type: 'PATRONYMIC', payload });
export const setGender = (payload) => ({ type: 'GENDER', payload });
export const setAge = (payload) => ({ type: 'AGE', payload });
