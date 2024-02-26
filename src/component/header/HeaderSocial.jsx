import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
const HeaderSocial = () => {
    return (
        <div className='header-socials'>
            <a href='https://linkedin.com' target='_blank'>
                <BsLinkedin />
            </a>
            <a href='https://githup.com' target='_blank'>
                <FaGithub />
            </a>
            <a href='https://dribble.com' target='_blank'>
                <FiDribbble />
            </a>
        </div>
    )
}

export default HeaderSocial