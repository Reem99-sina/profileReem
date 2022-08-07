import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FiBook } from 'react-icons/fi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDots } from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
    const [activeNav, setactiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#skill' onClick={() => setactiveNav('#skill')} className={activeNav === '#experiment' ? 'active' : ''}><FiBook /></a>
            <a href='#serivers' onClick={() => setactiveNav('#serivers')} className={activeNav === '#serivers' ? 'active' : ''}><RiServiceLine /></a>
            <a href='#contact' onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots /></a>

        </nav>
    )
}

export default Nav