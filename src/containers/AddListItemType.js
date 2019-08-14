import { connect } from 'react-redux'
import { PageSelection } from '../actions'
import AddListItem from './AddListItem';

const getListSpecificButton = (page) => {
  switch (page) {
    case PageSelection.MAIN:
      return true
    case PageSelection.WORKS:
      return false
    case PageSelection.ABOUT:
      return false
    default:
      throw new Error('Unknown page: ' + page)
  }
}

const mapStateToProps = state => ({
  list: getListSpecificButton(state.changePage)
})

export default connect(
  mapStateToProps
)(AddListItem)
