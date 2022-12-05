import React from 'react'
import { Link } from "react-router-dom";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h6 className="text-uppercase">Footer Content</h6>
                <p>Here you can use rows and columns to organize your footer content.</p>
                <p>Here you can use rows and columns to organize your footer content.</p>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h6 className="text-uppercase">Useful Links</h6>
                <ul className="list-unstyled">
                    <li><Link className='footer-link' to="/">Privacy Policy</Link></li>
                    <li><Link className='footer-link' to="/">Return Policy</Link></li>
                    <li><Link className='footer-link' to="/">FAQ</Link></li>
                    <li><Link className='footer-link' to="/">Help</Link></li>
                </ul>
            </div>
            

            <div className="col-md-3 mb-md-0 mb-3">
                <h6 className="text-uppercase">Connect With Us</h6>
                <ul className="list-unstyled">
                    <li><Link className='footer-link' to="/">facebook</Link></li>
                    <li><Link className='footer-link' to="/">twitter</Link></li>
                    <li><Link className='footer-link' to="/">instagram</Link></li>
                    <li><Link className='footer-link' to="/">linkedin</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <hr/>
    <div className="footer-copyright text-center py-3">© 2023 Copyright All Rights Reserved
        <Link className='link' href="/"> website.com</Link>
    </div>

</footer>  )
}

export default Footer