const JOIN_USER = 'JOIN_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const joinAction = (inputData) => {
    return {
        type: JOIN_USER,
        inputData: {
            email: inputData.email,
            id: inputData.id,
            name: inputData.name,
            password: inputData.password
        }
    }
}

export const LoginAction = (id) => {
    return {
        type: LOGIN_USER,
        inputData: {
            id: id
        }
    }
}

export const LogoutAction = () => {
    return {
        type: LOGOUT_USER
    }
}

const initialState = {
    users: [],
    login_id: null
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case JOIN_USER:
            return {
                users:
                    [...state.users, action.inputData]
            }
        case LOGIN_USER:
            return {
                ...state,
                login_id: action.inputData.id
            }
        case LOGOUT_USER:
            return {
                ...state,
                login_id: null
            }
        default:
            return state
    }
}