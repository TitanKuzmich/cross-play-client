import React, { useState, useEffect } from "react";
import classnames from "classnames";

import style from "./style.module.scss";

import Spinner from "../Spinner";
import closeIcon from "../../assets/svg/close.svg";
import searchIcon from "../../assets/svg/search.svg";
import config from "../../../config";

const SearchDynamic = ({
  onChange,
  min,
  max,
  pattern,
  isLoading,
  setLoading,
  width,
  placeholder,
  type
}) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [timer, setTimer] = useState(0);

  const searchStart = () => {
    if (search === "") {
      onChange("");
    }

    if (!search || (min && search.length < min)) {
      return null;
    }

    if(search){
      onChange(search);
    }
  }

  useEffect(() => {
    window.clearTimeout(timer)
    if (isTyping) {
      setLoading(true);
      const timeOut = window.setTimeout(() => {
        searchStart();
        setIsTyping(false);
        setLoading(false);
      }, config.searchIdle)

      setTimer(timeOut);
    }
  }, [search, isTyping])

  const onResetSearch = () => {
    setSearch("");
    onChange("");
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsTyping(false);
      searchStart();
    }
  }

  const setFocused = (focus) => {
    setIsFocused(focus);
  }

  const handleValidation = (value) => {
    if (!pattern || value === "") return true;

    if (typeof pattern === "string") {
      const condition = new RegExp(pattern, "g");
      return condition.test(value);
    }

    if (typeof pattern === "object") {
      const conditions = pattern.map(rule => new RegExp(rule, "g"));
      return conditions.map(condition => condition.test(value));
    }

    return true;
  }

  const handleChange = (e) => {
    if (!isTyping) {
      setIsTyping(true);
    }

    const isValid = handleValidation(e.target.value)
    if (isValid) {
      setSearch(e.target.value);
    }
  }

  return (
    <div className={style.wrapper} style={{ width }}>
      <div className={style.container}>
        <input
          placeholder={placeholder}
          onKeyPress={e => onKeyPress(e)}
          onChange={e => handleChange(e)}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          maxLength={max}
          type={type}
          pattern={type === "phone" ? "[0-9]" : ""}
          value={search}
          className={classnames(style.inputSearch, "text text--big")}
        />
        {search && !isLoading && (
            <div
                className={style.iconWrapper}
                onClick={() => onResetSearch()}
            >
                <img src={closeIcon} alt="close"/>
            </div>
        )}
        {!search && !isLoading && (
            <div
                className={style.iconWrapper}
            >
                <img src={searchIcon} alt="search"/>
            </div>
        )}
        {isLoading && isFocused && (
          <div className={style.loadingWrapper}>
            <Spinner isLoading />
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchDynamic;
