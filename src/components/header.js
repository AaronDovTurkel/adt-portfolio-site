import React from 'react';
import PageLink from '../containers/PageLink'
import { PageSelection } from '../actions'

const Header = () => (
    <div>
        <PageLink page={PageSelection.MAIN}>the holy coder</PageLink>
        <PageLink page={PageSelection.WORKS}>Works</PageLink>
        <PageLink page={PageSelection.ABOUT}>About</PageLink>
    </div>
)

export default Header;