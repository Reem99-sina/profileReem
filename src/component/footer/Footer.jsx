import React from 'react'
import './footer.css'
import { GrFacebook } from 'react-icons/gr'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
          
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
                <a href='https://instagram.comhttps://www.instagram.com/reem_ebrahim_99?igsh=MXh6cW42NnRqcDl3Mw%3D%3D&utm_source=qr'><AiFillInstagram /></a>
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