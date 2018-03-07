import { ADD_LIST, REMOVE_LIST, ADD_TO_LSIT } from '../constants/action-types';

const initialState = {
    lists: [
        {name: 'Open tasks', id: 2},
        {name: 'Ongoint', id: 3},
        {name: 'Completed', id: 4}
    ],
    stickers: [
        {id: 1, text: 'Fix dem bugs', listId: 2},
        {id: 2, text: 'Be awesome', listId: 3},
        {id: 3, text: 'Chatbot does something weird', listId: 2},
        {id: 4, text: 'Did this earlier', listId: 4}
    ]
};

const lists = ( state = initialState, action ) => {
    switch (action.type) {
    case ADD_LIST:
        return { ...state, lists: [...state.lists, action.payload] };
    case ADD_TO_LSIT:
        return { ...state, stickers: state.stickers.map(s => {
            s.id === action.payload.id ? s.listId: action.payload.listId;
        }
        )};
    default:
        return state;
    }
};

export default lists;
