import { connect } from 'react-redux'
import { changePage } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.page === state.changePage
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changePage(ownProps.page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
