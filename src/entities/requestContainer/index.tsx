import { OptionUi } from "../../shared/ui/OptionUi"
import { SelectUi } from "../../shared/ui/SelectUi"
import { SelectValue } from "../../features"
import { InputUi } from "../../shared/ui/InputUi"
import { useState } from "react"
import { ButtonUi } from "../../shared/ui/ButtonUi"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { fetchGitRepos, fetchGitUsers } from "../actions"
import { UserInfo } from "../../widgets/userInfo/UserInfo"
import { ReposInfo } from "../../widgets/reposInfo/ReposInfo"

export const RequestContainer = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [selectValue, setSelectValue] = useState<string>('user')

    const { user } = useAppSelector(state => state.user)
    const { repo } = useAppSelector(state => state.repo)

    const dispatchUsers = useAppDispatch()
    const dispatchRepos = useAppDispatch()

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setSelectValue(value)
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleClickSubmit = () => {
        setInputValue('')

        return selectValue === 'user' ? dispatchUsers(fetchGitUsers(inputValue)) : dispatchRepos(fetchGitRepos(inputValue))   
    }

    return (
        <div className="request__container">
            <div className="request__ui-actions" style={{
                display: "flex",
                flexDirection: "column",
                gap: '15px'
            }}>
                <label style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '10px'
                }}>
                    {selectValue === 'user' ? 'Введите имя пользователя' : 'Введите название репозитория'}
                    <InputUi
                        className="input__ui"
                        type="text"
                        handleChange={handleChangeInput}
                        value={inputValue}
                        placeholder="Вводить сюда"
                    />
                </label>
                <label style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '10px'
                }}>
                    Что ищем?
                    <SelectUi
                        className="select__ui"
                        value={selectValue}
                        handleChange={handleChangeSelect}
                        children={
                            SelectValue.map(({type}) => {
                                return <OptionUi value={type} key={type} className='option__ui' text={type}/>
                            })
                        }
                    />
                </label>
                <ButtonUi
                    className="submit"
                    text={`Запросить ${selectValue}`}
                    handleClick={handleClickSubmit}
                />
            </div>
            <div className="request__result">
                {selectValue === 'user' ? <UserInfo user={user}/> : <ReposInfo repo={repo}/>}
            </div>
        </div>
    )
}