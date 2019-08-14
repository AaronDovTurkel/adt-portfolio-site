import { connect } from 'react-redux'
import { toggleListItem } from '../actions'
import List from '../components/List'
import { PageSelection, VisibilityFilters } from '../actions'

const getVisibleListItems = (listItems, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return listItems
    case VisibilityFilters.SHOW_COMPLETED:
      return listItems.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return listItems.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const getCurrentPageList = (visibleListItems, page) => {
    switch (page) {
      case PageSelection.MAIN:
        return visibleListItems.filter(t => t.list)
      case PageSelection.WORKS:
        return visibleListItems.filter(t => !t.list)
      case PageSelection.ABOUT:
        return visibleListItems.filter(t => !t.list)
      default:
        throw new Error('Unknown page: ' + page)
    }
  }

const mapStateToProps = state => ({
  listItems: getCurrentPageList(getVisibleListItems(state.listItems, state.visibilityFilter), state.changePage)
})

const mapDispatchToProps = dispatch => ({
    toggleListItem: id => dispatch(toggleListItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
