import * as types from "../../../types/types";

const initialState = {
    error: "",
    processing_request: false
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_ERROR:
            return {
                ...state,
                error: "",
            };


        default:
            return state;
    }
};
export default homeReducer;
