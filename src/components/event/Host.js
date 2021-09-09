import styled from "styled-components";

const ProfilePic = styled.img`
border-radius : 360px;
width : 200px;
height : 200px;
`

const Host = () => {
    return (
        <div style={{textAlign:"center"}}>
            <ProfilePic src="https://avatars.dicebear.com/api/micah/adminlnwza.svg?background=%23ede1be" alt="host" />
            <h2 className="mt-3 lang-th">Jane Doe</h2>
            <p className="gradient-text" style={{fontSize:26}}>@somethingbkk</p>
            <p className="mt-4 lang-th">ทดสอบข้อความ about</p>
        </div>
    );
};

export default Host;