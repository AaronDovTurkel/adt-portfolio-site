import { combineReducers } from 'redux'
import listItems from './listItems'
import visibilityFilter from './visibilityFilter'
import changePage from './changePage'

export default combineReducers({
    listItems,
    visibilityFilter,
    changePage
})
