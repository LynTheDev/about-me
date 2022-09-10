import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'

const FixedSide = () => {
    const [isActive, setActive] = React.useState<boolean>(true);

    const ShowItems = () => {
        setActive(!isActive);
    }

    return (
        <nav className="nav-fixed animate">
            <ul>
                <li className={isActive ? "hide-items" : "nav-fixed-items animate-bar"}>
                    <ul className="nav-fixed-items">
                        <li className="nav-fixed-item animate-bar delay-slow">
                            <ScrollIntoView selector="#home">
                                <img className="logos" src="/img/house-fill.svg" alt="logo"/>
                            </ScrollIntoView>
                        </li>
                        <li className="nav-fixed-item-shade animate-bar delay-medium">
                            <ScrollIntoView selector="#work">
                                <img className="logos" src="/img/code-square.svg" alt="logo"/>
                            </ScrollIntoView>
                        </li>
                        <li className="nav-fixed-item-shade-light animate-bar delay-fast">
                            <ScrollIntoView selector="#abt">
                                <img className="logos" src="/img/journal.svg" alt="logo"/>
                            </ScrollIntoView>
                        </li>
                    </ul>
                </li>
                <button onClick={ShowItems} className="btn-round">
                    <b>+</b>
                </button>
            </ul>
        </nav>
    )
}

export default FixedSide;