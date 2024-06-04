import { FC } from "react";

interface IButtonUi {
    className: string,
    text: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonUi: FC<IButtonUi> = ({className, text, handleClick}) => {
    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
}