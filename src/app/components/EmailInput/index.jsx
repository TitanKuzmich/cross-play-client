import React from "react"
import {isValidEmail} from "../../utils/utils"

import Input from "../Input"

const EmailInput = ({placeholder, isError, email, setEmail, setError, isShowError, icon, className}) => {
    const onChangeEmail = (value) => {
        if (isError) {
            setError("")
        }
        setEmail(value)
    }

    const onBlur = (e) => {
        if (e.target.value) {
            setError(isValidEmail(e.target.value) ? "" : "Invalid email address")
        }
    }

    return (
        <Input
            className={className}
            icon={icon}
            placeholder={placeholder}
            value={email}
            onChange={onChangeEmail}
            error={isShowError && isError}
            onBlur={onBlur}
        />
    )
}

export default EmailInput
