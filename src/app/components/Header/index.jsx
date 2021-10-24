import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import classnames from "classnames";

import Wrapper from "../Wrapper";

import style from "./style.module.scss";
import {paths} from "./helper";

import logo from "../../assets/svg/astronaut.svg";

const Header = () => {
    // const history = useHistory();
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <Wrapper extraClassName={style.headerWrapper}>
            <nav className={classnames(style.mainNavigation, {[style.mainNavigationOpen]: isOpen})}>
                <ul>
                    {paths.map((path) => (
                        <li key={path.route}>
                            <NavLink
                                className={classnames(style.menuItem, "text text--big")}
                                to={path.route}
                                isActive={() => window.location.pathname === path.route}
                                activeClassName={style.menuItemActive}
                                onClick={() => {setOpen(false)}}
                            >
                                {path.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>


            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>

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