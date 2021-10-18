import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import classnames from "classnames";

import Wrapper from '../Wrapper';

import style from "./style.module.scss";
import {paths} from "./helper";

const Header = () => {
    const history = useHistory();
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <Wrapper>
            <nav className={classnames(style.mainNavigation, {[style.mainNavigationOpen]: isOpen})}>
                <ul>
                    {paths.map((path) => (
                        <li key={path.route}>
                            <NavLink
                                className={classnames(style.menuItem, "text text--big")}
                                to={path.route}
                                isActive={() => window.location.hash === path.route}
                                activeClassName={style.menuItemActive}
                                onClick={() => {setOpen(false)}}
                            >
                                {path.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div
                className={classnames(style.hamburger, {[style.hamburgerOpen]: isOpen})}
                onClick={toggleOpen}
            >
                <span/>
                <span/>
                <span/>
            </div>
        </Wrapper>
    );
};

export default Header;