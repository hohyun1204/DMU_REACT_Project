const JOIN_USER = 'JOIN_USER';

export const loginAction = (inputData) => ({
    type: JOIN_USER,
    inputData: {
        id: inputData.id,
        name: inputData.name
    }
})

const initialState = {
    
}

export default function userReducer(state = initialState, action){
    switch(action.type) {
        case JOIN_USER:
            return {

            }
        default:
            return state
    }
}