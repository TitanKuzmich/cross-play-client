import React, {FC, FocusEvent, ChangeEvent} from "react"
import classNames from "classnames"

import style from "./style.module.scss"

const Input = ({
                   placeholder,
                   type,
                   name,
                   required,
                   error,
                   secondary,
                   value,
                   autoComplete,
                   onChange,
                   onKeyDown,
                   icon,
                   className,
                   onBlur,
                   disabled = false
               }) => {
    const onChangeHandler = (e) => {
        if (!onChange) {
            return null
        }

        onChange(e.target.value)
        return true
    }

    const onBlurHandle = (e) => {
        if (onBlur) {
            onBlur(e)
        }
    }

    return (
        <div className={classNames(style.inputField, className)}>
            <div className={classNames(style.inputImg)}>
                <img src={icon} alt="input icon"/>
            </div>
            <input
                autoComplete={autoComplete}
                disabled={disabled}
                className={classNames("text text--middle", {[style.error]: error})}
                placeholder={placeholder}
                type={type || "text"}
                name={name}
                required={required || false}
                value={value}
                onChange={onChangeHandler}
                onKeyPress={e => (onKeyDown ? onKeyDown(e) : null)}
                onBlur={onBlurHandle}
            />

            {error && <div className={style.errorMessage}>!</div>}
        </div>
    )
}

export default Input
