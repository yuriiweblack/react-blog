import { Link } from "react-router-dom";

const Nav = ({search, setSearch}) => {
    return(
        <div className="nav">
            <form className="searchForm" onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    id="search"
                    placeholder="Search post"
                    value={search}
                    onChange={ e => setSearch(e.target.value)}
                />
            </form>
            <ul className="nav__list">
                <li>
                    <Link className="nav__list-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav__list-link" to="/post">Post</Link>
                </li>
                <li>
                    <Link className="nav__list-link" to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;