import React, { forwardRef} from "react"
import classNames from "classnames"

import InputMessage from "../InputMessage";

import {handleInputValidation} from "../../utils/utils";

import style from "./style.module.scss"

const Textarea = forwardRef((props, ref) => {
  const {
    notice,
    error,
    onChange,
    value,
    autoSize,
    pattern,
    name,
    label,
    placeholder,
    resize = false,
    className,
    disabled,
    ...rest
  } = props

  const onChangeHandle = (e) => {
    if (handleInputValidation(e.target.value, pattern) && onChange) {
      onChange(e)
    }
  }

  const getError = () => {
    if (!error) {
      return null
    }

    if (typeof error === "string") {
      return <InputMessage error={error} notice={notice} />
    }

    return error
  }

  return (
    <div className={style.textareaWrapper}>
      <textarea
        className={classNames(style.textarea, className, "text text--middle", { [style.error]: error, [style.resize]: resize })}
        value={value}
        onChange={onChangeHandle}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />

      {getError()}
    </div>
  )
})

export default Textarea
