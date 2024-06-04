import { RequestContainer } from "../../entities/requestContainer"

export const ChooseForm = () => {
    return (
        <form action="#" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} className="form">
            <RequestContainer/>
        </form>
    )
}