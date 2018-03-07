import { ADD_LIST, REMOVE_LIST, ADD_TO_LSIT } from '../constants/action-types';

export const addList = (list) => {
    return {
        type: ADD_LIST, payload: list
    };
};

export const addToList = (sticker) => {
    return {
        type: ADD_TO_LSIT, payload: sticker
    };
};
