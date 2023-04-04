import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
};

const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case SET_USER:
            return {
                ...state, 
                user : action.user,
            };
        default:
            return state;
    }
};

export default userReducer;

// stateUpdater
// if i press to the like button then it will update the state otherwise return default state