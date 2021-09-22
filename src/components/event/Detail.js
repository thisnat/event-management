const Detail = ({data}) => {
    return (
        <div className="p-2 lang-th">
            <h4>รายละเอียด</h4>
            <p>{data.about}</p>
        </div>
    );
};

export default Detail;