import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  list: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default ListItem
