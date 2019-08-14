import React from 'react'
import { connect } from 'react-redux'
import { addListItem } from '../actions'

const AddListItem = ({ dispatch, list }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addListItem(input.value, list))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}

export default connect()(AddListItem)
