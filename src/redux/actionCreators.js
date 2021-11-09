import * as ActionTypes from './actionTypes';

// arrow fuction, receive 4 parameters and return a JS object
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author, author,
        comment, comment
    }
});
