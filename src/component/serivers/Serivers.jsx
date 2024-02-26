import React from 'react'
import './serivers.css'
const Serivers = () => {
    window.onscroll = function () {
        const servier = document.querySelector("#serivers");
        const spans = document.querySelectorAll(".fill");
        if (window.scrollY >= servier.offsetTop) {
            spans.forEach((ele) => {
                ele.style.width = ele.dataset.width;
            })
        }
    }
    return (
        <section id='serivers'>
            
            <h2>services</h2>
            <div className='container'>
                <div class="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right" data-animation="slide-in-right">
                    <div class="bar my-3 flex">
                        <div class="bar fill" data-width='100%'>
                            <div class="tag bold flex">CSS</div>
                        </div>
                        <span>100</span>
                    </div>

                    <div class="bar my-3 flex">
                        <div class="bar fill" data-width='100%'>
                            <div class="tag bold flex">HTML</div>
                        </div>
                        <span>100</span>
                    </div>

                    <div class="bar my-3 flex">
                        <div class="bar fill " data-width='90%'>
                            <div class="tag bold flex">React</div>
                        </div>
                        <span>90</span>
                    </div>
                    <div class="bar my-3 flex">
                        <div class="bar fill " data-width='70%'>
                            <div class="tag bold flex">Next</div>
                        </div>
                        <span>70</span>
                    </div>
                    <div class="bar my-3 flex">
                        <div class="bar fill " data-width='90%'>
                            <div class="tag bold flex">JavaScript</div>
                        </div>
                        <span>90</span>
                    </div>
                    <div class="bar my-3 flex">
                        <div class="bar fill " data-width='80%'>
                            <div class="tag bold flex">bootstrap</div>
                        </div>
                        <span>80</span></div>
                        <div class="bar my-3 flex">
                        <div class="bar fill " data-width='80%'>
                            <div class="tag bold flex">Material ui</div>
                        </div>
                        <span>80</span></div>
                </div>

                <div class="bar my-3 flex">
                    <div class="bar fill " data-width='80%'>
                        <div class="tag bold flex">Node.js</div>
                    </div>
                    <span>80</span>
                </div>

                <div class="bar my-3 flex">
                    <div class="bar fill " data-width='70%'>
                        <div class="tag bold flex">express.js</div>
                    </div>
                    <span>70</span>
                </div>

                <div class="bar  my-3 flex">
                    <div class="bar fill " data-width='60%'>
                        <div class="tag bold flex">adobe Xd</div>
                    </div>
                    <span>60</span>
                </div>

                <div class="bar my-3 flex">
                    <div class="bar fill " data-width='60%'>
                        <div class="tag bold flex">Photoshop</div>
                    </div>
                    <span>60</span>
                </div>

                <div class="bar my-3 flex">
                    <div class="bar fill " data-width='60%'>
                        <div class="tag bold flex">socket.io</div>
                    </div>
                    <span>60</span>
                </div>
                <div class="bar my-3 flex">
                    <div class="bar fill " data-width='50%'>
                        <div class="tag bold flex">GraphQL</div>
                    </div>
                    <span>50</span>
                </div>
            </div>
        </section >
    )
}

export default Serivers