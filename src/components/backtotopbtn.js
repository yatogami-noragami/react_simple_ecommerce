import { useState, useEffect } from "react"

const BttBtn = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setShowButton(scrollTop > 100); // Show button when scroll position is greater than 100px
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scroll to top smoothly
        });
    };

    return <>



        {showButton && (
            <button className="btn border-0 fw-bold fs-1 text-light" id="bttbtn" onClick={handleBackToTop}>
                <i className="fa-solid fa-circle-up"></i>
            </button>
        )}
    </>
}

export default BttBtn