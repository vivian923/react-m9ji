import {createStore,combineReducers,applyMiddleware} from "redux"
import recommend from "./reducers/recommend"
import spelldeals from "./reducers/spelldeals"
import brand from "./reducers/brand"
import search from "./reducers/search"
import cart from "./reducers/cart"
import {composeWithDevTools} from "redux-devtools-extension"
import reduxThunk from "redux-thunk"
const reducer = combineReducers({
    recommend,
    spelldeals,
    brand,
    search,
    cart
})

const store =createStore(reducer,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store