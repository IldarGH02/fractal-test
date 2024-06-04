import { FC } from "react"

interface IInputUi {
    placeholder: string
    type: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    className: string
}

export const InputUi: FC<IInputUi> = ({placeholder, type, handleChange, value, className}) => {
    return (
        <input 
            placeholder={placeholder} 
            type={type} 
            onChange={handleChange} 
            value={value}
            className={className}    
        />
    )
}