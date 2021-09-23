const Loading = () => {
    return (
        <div className="container" style={{ marginTop: "8%", textAlign:"center" }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h1>Loading....</h1>
        </div>
    );
};

export default Loading;