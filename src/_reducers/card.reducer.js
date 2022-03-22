import { userConstants } from '../_constants';

export function cardReducer(state = {}, action) {
  switch (action.type) {
    case userConstants.GETCARDS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETCARDS_SUCCESS:
      return {
        cards: action.payload
      };
    case userConstants.GETCARDS_FAILURE:
      return { 
        error: action.payload
      };
    case userConstants.CARDS_REQUEST:
      return {
        loading: true
      };
    case userConstants.CARDS_SUCCESS:
        console.log('action.payload', action.payload)
      return {
        added: action.payload
      };
    case userConstants.CARDS_FAILURE:
      return { 
        error: action.payload
      };
    // case userConstants.DELETE_REQUEST:
    //   // add 'deleting:true' property to user being deleted
    //   return {
    //     ...state,
    //     items: state.items.map(user =>
    //       user.id === action.id
    //         ? { ...user, deleting: true }
    //         : user
    //     )
    //   };
    // case userConstants.DELETE_SUCCESS:
    //   // remove deleted user from state
    //   return {
    //     items: state.items.filter(user => user.id !== action.id)
    //   };
    // case userConstants.DELETE_FAILURE:
    //   // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
    //   return {
    //     ...state,
    //     items: state.items.map(user => {
    //       if (user.id === action.id) {
    //         // make copy of user without 'deleting:true' property
    //         const { deleting, ...userCopy } = user;
    //         // return copy of user with 'deleteError:[error]' property
    //         return { ...userCopy, deleteError: action.error };
    //       }

    //       return user;
    //     })
    //   };
    default:
      return state
  }
}