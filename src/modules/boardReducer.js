const WRITE_BOARD = 'WRITE_BOARD';
const VIEW_BOARD = 'VIEW_BOARD';
const CLICK_LIKE = 'CLICK_LIKE';

export const writeAction = (inputData) => {
    return {
        type: WRITE_BOARD,
        inputData: {
            id: inputData.id,
            userid: inputData.userid,
            name: inputData.name,
            lecture: inputData.lecture,
            professor: inputData.professor,
            content: inputData.content,
            like: 0,
            comment: 0,
            date: inputData.date
        }
    }
}

export const viewAction = (id) => {
    return {
        type: VIEW_BOARD,
        inputData: {
            id: id
        }
    }
}

export const likeAction = (inputData) => {
    return {
        type: CLICK_LIKE,
        inputData: {
            boardid: inputData.boardid,
            userid: inputData.userid,
            index: inputData.index
        }
    }
}

const initialState = {
    boards: [],
    lastId: 0,
    viewId: null
}

export default function boardReducer(state = initialState, action) {
    switch(action.type) {
        case WRITE_BOARD:
            return {
                lastId: state.lastId + 1,
                boards: [...state.boards, action.inputData]
            }
        case VIEW_BOARD:
            return {
                ...state, 
                viewId: action.inputData.id
            }
        case CLICK_LIKE:
            let boards = {...state.boards};
            boards[action.inputData.index].comment++;
            return {
            }
        default:
            return state
    }
}