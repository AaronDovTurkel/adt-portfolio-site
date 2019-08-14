import { PageSelection } from '../actions'

const changePage = (state = PageSelection.MAIN, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return action.page
    default:
      return state
  }
}

export default changePage
