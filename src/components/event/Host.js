import { ProfilePic } from "../../style/Image";

const Host = ({ user }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <ProfilePic src={user.pic} alt="host" />
            <div className="lang-th">
            {
                user.isOrg
                    ? <h2 className="mt-4 mb-0">{user.name}</h2>
                    : <h2 className="mt-4 mb-0">{user.name} {user.lastName}</h2>
            }
            </div>
            <p className="gradient-text" style={{ fontSize: 24 }}>@{user.username}</p>
            <p className="mt-4 lang-th">{user.about}</p>
        </div>
    );
};

export default Host;