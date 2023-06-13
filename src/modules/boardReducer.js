const WRITE_BOARD = 'WRITE_BOARD';
const VIEW_BOARD = 'VIEW_BOARD';
const UPDATE_BOARD = 'UPDATE_BOARD';
const DELETE_BOARD = 'DELETE_BOARD';
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

export const updateAction = (inputData) => {
    return {
        type: UPDATE_BOARD,
        inputData: {
            id: inputData.id,
            userid: inputData.userid,
            name: inputData.name,
            lecture: inputData.lecture,
            professor: inputData.professor,
            content: inputData.content,
            like: inputData.like,
            comment: inputData.comment,
            date: inputData.date
        }
    }
}

export const deleteAction = (id) => {
    return {
        type: DELETE_BOARD,
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
    likes: [],
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
        case UPDATE_BOARD:
            const boards = state.boards;
            const idx = state.boards.findIndex(it => it.id === action.inputData.id);
            boards[idx] = action.inputData
            return {
                ...state,
                boards
            }
        case DELETE_BOARD:
            return {
                ...state,
                boards: state.boards.filter(it => it.id !== action.inputData.id)
            }
        case CLICK_LIKE:
            const boards2 = state.boards;
            boards2[action.inputData.index].like++;
            return {
                ...state,
                boards2
            }
        default:
            return state
    }
}