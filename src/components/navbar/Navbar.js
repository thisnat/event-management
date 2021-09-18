import { logOut } from "../../service/api";

const Navbar = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    const handleLogoutBtn = (e) => {
        e.preventDefault();

        logOut();
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{marginLeft:"10%"}}>🎉 event mangement</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link lang-th" href="/">My event</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav" style ={{marginRight:"10%"}}>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="navbar-brand" href="/">
                                    <img className="navbar-profile-pic " src={userData.pic} alt="profile" />
                                </span>
                                @{userData.username}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/host" style={{ color: "green" }}>🎉 สร้างงานอีเว้นท์</a></li>
                                <li><a className="dropdown-item" href="/me">ข้อมูลบัญชี</a></li>
                                <li><a className="dropdown-item" href="/" style={{ color: "red" }} onClick={handleLogoutBtn}>ออกจากระบบ</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;