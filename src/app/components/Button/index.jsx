import React from "react"
import classNames from "classnames"

import style from "./style.module.scss"

const Button = ({ children, loading, vk, spotify, yandex, transform }) => {
  return (
    <button
      className={classNames(style.button, { [style.disabled]: loading, [style.buttonTransform]: transform })}
      type="submit"
    >
      <div className={classNames(style.buttonText, "text text--middle", {
        [style.buttonTextVk]: vk,
        [style.buttonTextSpotify]: spotify,
        [style.buttonTextYandex]: yandex,
      })}>{children}</div>
      {loading && <div className={style.loader} />}
    </button>
  )
}

export default Button
