const listItems = (state = [], action) => {
    switch (action.type) {
      case 'ADD_LIST_ITEM':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            list: action.list,
            completed: false
          }
        ]
      case 'TOGGLE_LIST_ITEM':
        return state.map(listItem =>
          (listItem.id === action.id)
            ? {...listItem, completed: !listItem.completed}
            : listItem
        )
      default:
        return state
    }
  }
  
  export default listItems
  