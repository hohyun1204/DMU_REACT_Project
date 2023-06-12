const JOIN_USER = 'JOIN_USER';

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

const initialState = {
    users: []
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case JOIN_USER:
            return {
                users:
                    [...state.users, action.inputData]
            }
        default:
            return state
    }
}