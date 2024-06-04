import { FC } from "react"
import { IUser } from "../../app/types"

interface IUserInfo {
    user: IUser
}

export const UserInfo: FC<IUserInfo> = ({user}) => {
    return (
        <div className="user__card">
            <div className="user__card-content">
                <h2 className="user__card-name">
                    Имя:
                    <span style={{
                        marginLeft: '5px',
                        color: 'red'
                    }}
                    >
                        {user.name}
                    </span>
                </h2>
                <p className="user__card-repos">
                    Количество репозиториев: 
                    <span
                        style={{
                            marginLeft: '5px',
                            color: 'red'
                        }}
                    >
                        {user.public_repos}
                    </span>
                </p>
            </div>
        </div>
    )
}