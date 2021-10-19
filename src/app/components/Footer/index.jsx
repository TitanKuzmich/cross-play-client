import React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";

import Wrapper from "../Wrapper";

import style from "./style.module.scss";

const Footer = () => (
    <div className={style.footer}>
        <Wrapper padding={73}>
            <Link className="text text--small" to="#">©2021 - CrossPL</Link>
            <Link className={classnames(style.terms, "text text--small")} to="#" target="_blank"
               rel="noopener noreferrer">
                Политика конфиденциальности
            </Link>
        </Wrapper>
    </div>
)

export default Footer;