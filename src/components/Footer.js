const Footer = () => {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    return (
        <div>
            <footer style={{textAlign:"center", backgroundColor:"#f0f0f0"}} className="border-top py-3">
                <strong className="mb-0">made with ❤️</strong>
                <p className="mb-2">event-mangement CSProject 2021</p>
                <button onClick={scrollTop} className="btn-totop">☝ back to top</button>
            </footer>
        </div>
    );
};

export default Footer;