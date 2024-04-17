import React from 'react'
import CTA from './CTA'
import me from '../../assets/reem.jpg'
import './header.css'
import HeaderSocial from './HeaderSocial'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello i am</h5>
                <h2>Reem ebrahim desouky</h2>
                <h5 className='text-light'>full stack developer</h5>
                <img src={me} />
                <CTA />
                <HeaderSocial />
                <a href='#contact' className='scroll_down'>scroll down</a>
            </div>
        </header>
    )
}

export default Header