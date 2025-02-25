import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <p className="footer-content">&copy; {new Date().getFullYear()} Karen's Booking Website</p>
        </footer>

    );
}

export default Footer