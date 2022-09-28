import React from "react";

const Footer = () => {
    const footerStyle = {
        color: 'purple',
        fontStyle: 'italic',
        fonSize: 16
    }
    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki</em>
        </div>
    )
}

export default Footer;