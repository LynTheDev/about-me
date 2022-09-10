import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'

const PageNav = () => {
    return (
        <nav className="navbar animate">
            <p className="comp-logo"><b>O.N</b></p>

            <ScrollIntoView selector="#cta">
                <button type="button" className="btn btn-contact">
                    Contact <img className="img-contact" src="/img/envelope-paper-fill.svg" alt=" "/>
                </button>
            </ScrollIntoView>
        </nav>
    )
}

export default PageNav;