import { Link } from "react-router-dom"

export const Menu = () => {

    const padding = {
        paddingRight: 5
    }

    return (
        <>
            <div>
                <Link state={padding} to={'/anecdotes'}>anecdotes</Link>
                <Link state={padding} to={'/create'}>create new</Link>
                <Link state={padding} to={'/about'}>about</Link>
            </div>
        </>
    )
}