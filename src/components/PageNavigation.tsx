import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import useState from 'react';

const PageNav = () => {

    const DarkMode = () => {
        const home = document.getElementById('home');

        // @ts-ignore
        home.style.transition = '0.5s';
        document.body.style.transition = '0.5s';

        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.color = 'white';

        // @ts-ignore
        home.style.backgroundColor = '#484844';
        // @ts-ignore
        home.style.borderBottom = 'none';

        // @ts-ignore
        document.getElementById("moon").src="/img/sun-fill.svg";
    }

    const [dark, setDark] = React.useState<boolean>(false);

    const handleDark = () => {
        setDark(!dark);
    }

    const LightMode = () => {
        const home = document.getElementById('home');

        document.body.style.backgroundColor = '#eaeaea';
        document.body.style.color = 'black';

        // @ts-ignore
        home.style.backgroundColor = '#e0dcc4';
        // @ts-ignore
        home.style.borderBottom = '1px solid #d5d0b4';

        // @ts-ignore
        document.getElementById("moon").src="/img/moon.svg";
    }

    return (
        <nav className="navbar animate">
            <p className="comp-logo"><b>O.N</b></p>

            <ul className="flexed float-left">
                <li>
                    <ScrollIntoView selector="#cta">
                        <button type="button" className="btn btn-contact">
                            Contact <img className="img-contact" src="/img/envelope-paper-fill.svg" alt=" "/>
                        </button>
                    </ScrollIntoView>
                </li>
                <li>
                    <button onClick={handleDark} type="button" className="btn-no-pad dark-light font-size btn-contact">
                        <button type="button" onClick={dark ? DarkMode : LightMode} className="empty">
                            Toggle <img className="img-moon" id="moon" src="/img/moon.svg" alt="moon" />
                        </button>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default PageNav;