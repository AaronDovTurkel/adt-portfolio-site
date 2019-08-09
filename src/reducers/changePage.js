import { Pages } from '../actions'

const changePage = (state = Pages.MAIN, action) => {
    switch (action.type) {
      case 'CHANGE_PAGE':
        return action.page;
      default:
        return state;
    }
};

export default changePage;