import React from "react"
import classNames from "classnames"

import style from "./style.module.scss"

const InputMessage = ({ error, notice, inline }) => {
  if (!error && !notice) {
    return null
  }

  return (
    <React.Fragment>
      {notice && (
        <div className={classNames("notice", style.notice, { hidden: error, [style.noticeInline]: inline })}>
          {notice}
        </div>
      )}
      {error && (
        <div
          className={classNames("notice error", style.notice, style.inputErrorMessage, {
            [style.noticeInline]: inline
          })}
        >
          {error}
        </div>
      )}
    </React.Fragment>
  )
}

export default InputMessage
