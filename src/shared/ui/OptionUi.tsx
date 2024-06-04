import { FC } from "react"

interface IOptionUi {
    className: string,
    value: string,
    text: string
}

export const OptionUi: FC<IOptionUi> = ({className, value, text}) => {
    return (
        <option className={className} value={value}>{text}</option>
    )
}