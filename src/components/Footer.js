import styled from "styled-components";

const ToTopBtn = styled.button`
    border: none;
    font-weight: bolder;
`

const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div>
            <footer style={{textAlign:"center", backgroundColor:"#f0f0f0"}} className="border-top py-3">
                <p className="mb-2"><strong className="mb-0">made with ❤️</strong> event mangement for CS-Project</p>
                <ToTopBtn onClick={scrollTop}>☝ back to top</ToTopBtn>
            </footer>
        </div>
    );
};

export default Footer;