import React, {useState} from 'react';
import classnames from "classnames";

import Wrapper from "../../components/Wrapper";
import SearchDynamic from "../../components/SearchDynamic";
import PlatformCard from "./PlatformCard";
import ScrollArea from "../../components/ScrollArea";

import style from "./style.module.scss";

import {platforms} from "./helper";

const Transfer = () => {
    const [isLoading, setLoading] = useState(false)
    const [musicPlatforms, setMusicPlatforms] = useState(platforms)
    const onSearch = (search) => {
        if (!search) {
            setMusicPlatforms(platforms);
            return;
        }

        const filteredSearch = musicPlatforms.filter((platform) => new RegExp(search, 'ig').test(platform.title));
        setMusicPlatforms(filteredSearch);
    }

    return (
        <Wrapper extraClassName={style.mainWrapper}>

            <div className={style.subHeader}>
                <div className={classnames(style.subHeaderText, "disappearOnTablet")}>
                    <p className="text text--big">Выберите платформу, с которой хотели бы перенести</p>
                </div>
                <div className={classnames(style.subHeaderText, "disappearOnComp")}>
                    <p className="text text--big">Доступные платформы</p>
                </div>
                <SearchDynamic
                    placeholder="Поиск..."
                    isLoading={isLoading}
                    setLoading={setLoading}
                    onChange={onSearch}
                    pattern="^\D+$"
                    min={1}
                    max={20}
                />
            </div>
            <div className={style.platforms}>
                <ScrollArea
                    minElems={3}
                    numOfElems={musicPlatforms.length}
                    className={style.scrollWrapper}>
                    {musicPlatforms.map((platform, i) => (
                        <PlatformCard {...platform} key={`${platform.title}_${i}`}/>
                    ))}
                </ScrollArea>
            </div>
        </Wrapper>
    );
};

export default Transfer;