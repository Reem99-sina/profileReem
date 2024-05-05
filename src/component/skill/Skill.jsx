import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Skill = () => {
    return (
        <section id='skill'>
            <h5 style={{textTransform:"capitalize"}}>what skills i have</h5>
            <h2 style={{textTransform:"capitalize"}}>my skill</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>frontend developer</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>html</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>css</h4>
                                <small className='text-light'>intermediate</small></div>
                        </article><article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>bootstrap</h4>
                                <small className='text-light'>Experiece</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>javascript</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article><article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>jquery</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>react</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                            <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>next</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                            <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>React Native</h4>
                                <small className='text-light'>medium</small>
                            </div>                       </article>
                            <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>material ui</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                            <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>tailwind</h4>
                                <small className='text-light'>medium</small>
                            </div>                       </article>
                          
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>backend developer</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>nodejs</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>Express js</h4>
                                <small className='text-light'>Experiece</small></div>
                        </article><article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>socket.io - Rest API</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article><article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>mongoose</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>GraphQL</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                            <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>prisma</h4>
                                <small className='text-light'>Experiece</small>
                            </div>                       </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill