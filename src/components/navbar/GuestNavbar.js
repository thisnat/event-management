const GuestNavbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
            <div className="container-fluid">
                <a className="navbar-brand font-stylish" href="/" style={{marginLeft:"10%"}}>🎉 event mangement</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav" style ={{marginRight:"10%"}}>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle lang-th" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">สมาชิก </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item lang-th" href="/login">🔑 เข้าสู่ระบบ</a></li>
                                <li><a className="dropdown-item lang-th" href="/register">👋 ลงทะเบียน</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default GuestNavbar;