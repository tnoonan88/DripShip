import React from 'react';
import MenuBar from './MenuBar';
// import BasicMenu from './NavTabs';

function Header(props) {
  return (
    <header className="header">
        <MenuBar />
        {/* <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange}/> */}
    </header>
  );
}

export default Header;
