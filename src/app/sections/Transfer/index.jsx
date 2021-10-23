import React from 'react';
import classnames from "classnames";
import Scrollbar from "react-scrollbars-custom";

import Wrapper from "../../components/Wrapper";
import SearchDynamic from "../../components/SearchDynamic";
import PlatformCard from "./PlatformCard";

import style from "./style.module.scss";

import {platforms} from "./helper";

const Transfer = () => {
    return (
        <Wrapper extraClassName={style.mainWrapper}>

            <div className={style.subHeader}>
                <div className={style.subHeaderText}>
                    <p className="text text--big">Выберите платформу, с которой хотели бы перенести</p>
                </div>
                <SearchDynamic
                    placeholder="Поиск..."
                    // isLoading={isLoading}
                    // onChange={onSearch}
                    pattern="^\d+$"
                    min={3}
                    max={20}
                />
            </div>
            <div className={style.platforms}>
                <Scrollbar
                    noScrollX

                    contentProps={{
                        renderer: props => {
                            const { elementRef, ...restProps } = props;
                            return <div {...restProps} ref={elementRef} className={style.scrollWrapper} />;
                        }
                    }}

                    scrollerProps={{
                        renderer: props => {
                            const { elementRef, ...restProps } = props;
                            return <span {...restProps} ref={elementRef} className={style.scroller} />;
                        }
                    }}
                >
                    {platforms.map((platform, i) => (
                        <div
                            className={style.platform}
                            key={`${platform.title}_${i}`}
                        >
                            <PlatformCard {...platform} />
                        </div>
                    ))}
                </Scrollbar>
            </div>
        </Wrapper>
    );
};

export default Transfer;