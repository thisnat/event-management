const Register = () => {
    return (
        <div className="container mt-4 lang-th" style={{ maxWidth: 700 }}>
            <h1>ลงทะเบียน</h1>
            <hr />
            <div>
                <form>
                    <div className="mb-3">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className ="form-check-label" for="flexSwitchCheckDefault">บัญชีองค์กร</label>
                        </div>
                        <p className="text-muted">* บัญชีองค์กร รูปแบบการตั้งชื่อจะเป็นชื่ออย่างเดียวไม่มีนามสกุล</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ชื่อจริง</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">นามสกุล</label>
                        <input type="text" className="form-control" />
                    </div>
                    <label className="form-label">Username</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">@</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-success">ลงทะเบียน</button>
                </form>
            </div>
        </div>
    );
};

export default Register;