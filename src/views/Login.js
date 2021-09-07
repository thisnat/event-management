const Login = () => {
    return (
        <div className="container lang-th" style={{ marginTop: "10%", maxWidth: 700 }}>
            <h1>เข้าสู่ระบบ</h1>
            <hr />
            <div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className ="form-check-label" >Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
    );
};

export default Login;