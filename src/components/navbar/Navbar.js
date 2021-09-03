const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">event-mangement</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link lang-th" href="/">My event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link lang-th" href="/">ประวัติการใช้งาน</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-3">
                        <li className="nav-item">
                            <button className="btn btn-success">host an event!</button>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="navbar-brand" href="/">
                                    <img className="navbar-profile-pic " src="https://avatars.dicebear.com/api/open-peeps/admin.svg?backgroundColor=%23f0f0f0" alt="profile" />
                                </span>
                                Username
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/">ข้อมูลบัญชี</a></li>
                                <li><a className="dropdown-item" href="/" style={{ color: "red" }}>ออกจากระบบ</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;