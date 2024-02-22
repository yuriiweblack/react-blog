import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";



const Layout = ({posts, search, setSearch}) => {
    return(
        <div className="App">
            <Header />
            <Nav
            search={search}
            setSearch={setSearch} 
            />
            <Outlet />
            <Footer length={posts.length}/>
        </div>
    )
}

export default Layout;