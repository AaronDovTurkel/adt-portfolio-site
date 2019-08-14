import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ listItems, toggleListItem }) => (
  <ul>
    {listItems.map(listItem =>
      <ListItem
        key={listItem.id}
        {...listItem}
        onClick={() => toggleListItem(listItem.id)}
      />
    )}
  </ul>
)

List.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleListItem: PropTypes.func.isRequired
}

export default List
