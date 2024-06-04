import { FC } from "react"
import { IRepos } from "../../app/types"

interface IRepoInfo {
    repo: IRepos
}

export const ReposInfo: FC<IRepoInfo> = ({repo}) => {
    return (
        <div className="repos__card">
            <div className="repos__card-content">
                <h2 className="repos__card-name" 
                    style={{
                        margin: "0px", 
                        marginBottom: '10px'
                    }}
                >
                    Название репозитория: <br/>
                    <span style={{
                            marginLeft: '5px',
                            color: 'red'
                        }}
                    >
                        {repo.name}
                    </span>
                </h2>
                <p className="repos__card-repos" 
                    style={{
                        margin: "0px"
                    }}
                >
                    Количество звёзд: <br/>
                    <span style={{
                            marginLeft: '5px',
                            color: 'red'
                        }}
                    >
                        {repo.stargazers_count}
                    </span>
                </p>
            </div>
        </div>
    )
}