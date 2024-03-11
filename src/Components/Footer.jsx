import React from 'react';
import ReactDOM from 'react-dom';
const date=new Date();
const year=date.getFullYear();
function Footer(){
    return(<div className="footer">
        <p className="footer-text">Copyright ⓒ {year}</p>
    </div>);
}
export default Footer;