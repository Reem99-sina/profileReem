import React from 'react'
import { About } from './component/about/About'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Protifolio from './component/protifolio/Protifolio'
import Serivers from './component/serivers/Serivers'
import Footer from './component/footer/Footer'
import Contact from './component/contacy/Contact'
import Skill from './component/skill/Skill'


export const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Skill />
            <Serivers />
            <Protifolio />
            <Contact />
            <Footer />
        </>
    )
}
