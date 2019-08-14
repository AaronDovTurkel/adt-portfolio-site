let nextListItemId = 0
export const addListItem = (text, list) => ({
  type: 'ADD_LIST_ITEM',
  id: nextListItemId++,
  text,
  list
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const changePage = page => ({
  type: 'CHANGE_PAGE',
  page
})

export const toggleListItem = id => ({
  type: 'TOGGLE_LIST_ITEM',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const PageSelection = {
  MAIN: 'MAIN',
  WORKS: 'WORKS',
  ABOUT: 'ABOUT'
}
