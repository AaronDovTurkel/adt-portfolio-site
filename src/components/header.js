import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Pages } from '../actions'

const Header = () => (
  <div>
    <FilterLink filter={Pages.MAIN}>the holy coder</FilterLink>
    <FilterLink filter={Pages.WORKS}>Works</FilterLink>
    <FilterLink filter={Pages.ABOUT}>About</FilterLink>
  </div>
)

export default Header