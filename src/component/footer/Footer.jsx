import React from 'react'
import './footer.css'
import { GrFacebook } from 'react-icons/gr'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>
                egator
            </a>
            <ul className='permalinks'>
                <li>
                    <a href='#'>home</a>
                </li>
                <li>
                    <a href='#about'>about</a>
                </li><li>
                    <a href='#skill'>skill</a>
                </li><li>
                    <a href='#services'>services</a>
                </li><li>
                    <a href='#protifolio'>protifolio</a>
                </li>
                {/* <li>
                    <a href='#testimonial'>testimonial</a>
                </li> */}
                <li>
                    <a href='#contact'>contact</a>
                </li>
            </ul>
            <div className='footer__socials'>
                <a href='https://facebook.com'><GrFacebook /></a>
                <a href='https://instagram.com'><AiFillInstagram /></a>
                <a href='https://twitter.com'><AiFillTwitterCircle /></a>

            </div>
            <div className="footer__copyright">
                <small>
                    &copy;reem tutorials all rights reseved
                </small>
            </div>
        </footer>
    )
}

export default Footer