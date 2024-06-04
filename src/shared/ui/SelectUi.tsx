import { FC } from "react"

interface ISelectUi {
    className: string,
    value: string,
    children: React.ReactElement[]
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectUi: FC<ISelectUi> = ({className, value, children, handleChange}) => {
    return (
        <select 
            className={className} 
            value={value}
            onChange={handleChange}
        >
            {children}
        </select>
    )
}