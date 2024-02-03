import './App.css'
import React, { createRef, useRef, useEffect } from 'react';

import fg from './img/orange-fg.png'
import oranges from './img/oranges.png'
import law1 from './img/law 1.png'
import law2 from './img/law 2.png'
import law3 from './img/law 3.png'

import pfp from './img/photo-of-me.jpg'

import img1 from './img/img-slideshow-2.jpg'
import img2 from './img/img-slideshow-3.png'
import img3 from './img/img-slideshow-4.png'

function App() {
  const carouselRef = useRef();
  const imageRefs = useRef([]);

  return (
    <body id='body'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div id='cursor-default'/>
      <div id='overflow'>
        <div className='parallax'>  
          <div className='header'>
            <a id='logo'>GABRIEL™</a>
            <ul id='desc'>
                <li><a>NO PRESERVATIVES</a></li>
                <li><a>ALL NATURAL FLAVOUR</a></li>
            </ul>
          </div>
          <div id='accent'/>
          <img src={oranges} alt='An image of oranges' id='oranges'/>
          <div className='intro'>
            <span>#gabriel_ng_kai_jun	&#123;<br/></span>
            <span>&emsp;age: 15.769;</span><br/>
            <span>&emsp;height: 177cm; </span><br/>
            <span>&emsp;Sec_School: SST; </span><br/>
            <span>&emsp;CCA: English Drama Club; </span><br/>
            <span>&emsp;specialty: computing;</span><br/>
            <span>&#125;</span>
          </div>
          <img src={fg} id='orangeFG'></img>
        </div>

        <div className='aboutMe'>
          <header id='title'>About Me</header>
          <div>
            <img alt='A photo of me' src={pfp} id='pfp'></img>
            <div>
              <span id='para'>Hi! I’m Gabriel Ng, an aspiring web developer. I specialise in html, js, css, which makes me a skilful front-end developer, capable of making a portfolio website in 1 week. Not bad if I do say myself, but I always seek to improve, sharpen my skills and work on my craft.<br/><br/>When I’m not making award-winning websites (nah im not that good), I indulge myself in playing chess, studying, or playing video games.<br/></span>
            </div>
          </div>
        </div>


        <div className='laws'>
          <div id='sub-title'>Gabriel's 3 laws of motion:</div>
          <div id='cardDisplay'>
            <img src={law1} alt="The first law" />
            <img src={law2} alt="The second law" />
            <img src={law3} alt="The third law" />
          </div>
        </div>

        <div className="achievements">
          <div id="title">My Achievements</div>
          <div className="achievements_grid">
            <card className="achievements_card">
              <span id='sub-title'>Perse Coding 2022</span>
              <p>Round 1 Qualifier</p>
            </card>
            <card className="achievements_card">
              <span id='sub-title'>Edusave Award 2022</span>
            </card>
            <card className="achievements_card">
              <span id='sub-title'>Best Prototype award</span>
              <p>SST 3M Innoscience Challenge</p>
            </card>
          </div>
        </div>

        <div className="footer">
          <img src={oranges} alt='An image of oranges' id='oranges'/>
          <div className="footer_text">
            <h>&#169; Copyright Not Impending | Property of Gabriel Ng Kai Jun</h>
            <p>Check out my projects and businesses!</p>
            <ul className="footer_linksContainer">
              <li><a href="https://portfolio-business-rouge.vercel.app">PortfolioPros</a></li>
              <li><a href="https://coursework-website-v2.vercel.app">Lost and found database</a></li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  )
}
export default App
