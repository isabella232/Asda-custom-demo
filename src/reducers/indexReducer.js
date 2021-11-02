import { combineReducers } from "redux";
import selectedPersona from "./selectedOption";
import visibility from "./searchvisible";
import getQuery from "./getQuery";
import productDetail from "./productDetail";
import selectShop from "./selectShop";

const rootReducer = combineReducers({
    selectedPersona: selectedPersona,
    visibility: visibility,
    getQuery: getQuery,
    productDetail: productDetail,
    selectShop: selectShop
});

export default rootReducer;
