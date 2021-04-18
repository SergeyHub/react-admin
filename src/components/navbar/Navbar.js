import "./Navbar.css";

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar() } >
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">Video Managements</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className={'far fa-clock text-blue'}></i>
                </a>
                <a href="#">

                </a>
            </div>
        </nav>
    )
};

export default Navbar;