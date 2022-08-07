import React from 'react'
import './about.css'
import { FaTachometerAlt } from 'react-icons/fa'
import { DiResponsive } from 'react-icons/di'
import { BiRocket } from 'react-icons/bi'
export const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className="container ">
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about_card">
                            <FaTachometerAlt className='about__icon' />
                            <h5>Fast</h5>
                            <small>Fast load times and lag free interaction, my highest priority.</small>
                        </article>
                        <article className="about_card">
                            <DiResponsive className='about__icon' />
                            <i class="fas fa-window-restore" ></i>
                            <h5>Responsive</h5>
                            <small>My layouts will work on any device, big or small.</small>
                        </article>
                        <article className="about_card">
                            <BiRocket className='about__icon' />
                            <h5>Dynamic</h5>
                            <small>Websites don't have to be static, I love making pages come to life.</small>
                        </article>
                    </div>
                    <a href='#contact' className='btn btn-primary my-3'>let talk</a>
                </div>
            </div>
            {/* <div className="flex row label-wrap">
                <div className="flex row-gt-sm">
                    <div className="flex bullet-wrap ">
                        <div className="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x">
                            <div className="hexagon">
                                <i className="mdi mdi-speedometer"></i>
                            </div>
                        </div>
                        <div className="waypoint animated fade-in" data-animation="fade-in">
                            <div className="label bold">Fast</div>
                            <div>
                                Fast load times and lag free interaction, my highest
                                priority.
                            </div>
                        </div>
                    </div>

                    <div className="flex bullet-wrap ">
                        <div className="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x" data-delay=".2s" style="animation-delay: 0.2s;">
                            <div className="hexagon">
                                <i className="mdi mdi-cellphone-link"></i>
                            </div>
                        </div>
                        <div className="waypoint animated fade-in" data-animation="fade-in" data-delay=".2s" style="animation-delay: 0.2s;">
                            <div className="label bold">Responsive</div>
                            <div>My layouts will work on any device, big or small.</div>
                        </div>
                    </div>
                </div>
                <div className="flex row-gt-sm">
                    <div className="flex bullet-wrap ">
                        <div className="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x" data-delay=".4s" style="animation-delay: 0.4s;">
                            <div className="hexagon">
                                <i className="mdi mdi-lightbulb-outline"></i>
                            </div>
                        </div>
                        <div className="waypoint animated fade-in" data-animation="fade-in" data-delay=".4s" style="animation-delay: 0.4s;">
                            <div className="label bold">Intuitive</div>
                            <div>Strong preference for easy to use, intuitive UX/UI.</div>
                        </div>
                    </div>

                    <div className="flex bullet-wrap ">
                        <div className="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x" data-delay=".6s" style="animation-delay: 0.6s;">
                            <div className="hexagon">
                                <i className="mdi mdi-rocket"></i>
                            </div>
                        </div>
                        <div className="waypoint animated fade-in" data-animation="fade-in" data-delay=".6s" style="animation-delay: 0.6s;">
                            <div className="label bold">Dynamic</div>
                            <div>
                                Websites don't have to be static, I love making pages come
                                to life.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
