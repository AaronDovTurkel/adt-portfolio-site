import React from 'react'
import Header from './Header'
import Footer from './Footer'
import VisibleList from '../containers/VisibleList';
import AddListItemType from '../containers/AddListItemType';

const App = () => (
    <div>
        <Header />
        <AddListItemType />
        <VisibleList />
        <Footer />
    </div>
)

export default App
