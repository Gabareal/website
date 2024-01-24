import './App.css'
import React, { createRef, useRef, useEffect } from 'react';

import fg from './img/orange-fg.png'
import oranges from './img/oranges.png'
import orange from './img/one orange.png'

import pfp from './img/photo-of-me.jpg'

import img1 from './img/img-slideshow-2.jpg'
import img2 from './img/img-slideshow-3.png'
import img3 from './img/img-slideshow-4.png'

function App() {
  const carouselRef = useRef();
  const imageRefs = useRef([]);

  const handleClick = () => {
    window.location.href = 'https://www.instagram.com/yeepotaytoes/';
  }

  useEffect(() => {
    console.log('useEffect is running!')
    window.onmousedown = (e) => {
      console.log(e.clientX)
      carouselRef.current.dataset.mouseDownAt = e.clientX
    }
    window.onmousemove = (e) => {
      if(carouselRef.current.dataset.mouseDownAt === "0") return;
      const mouseDelta = parseFloat(carouselRef.current.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * -100;
      var nextPercentage = parseFloat(carouselRef.current.dataset.prevPercentage) + percentage;
      carouselRef.current.dataset.percentage = nextPercentage;
      if (nextPercentage > 0) {nextPercentage = 0}
      else if (nextPercentage < -100) {nextPercentage = -100}

      carouselRef.current.animate ({
          transform: `translateX(${nextPercentage}%)`
      }, {duration:1200, fill:"forwards"});
    }
    window.onmouseup = e => {
      carouselRef.current.dataset.mouseDownAt = '0';
      carouselRef.current.dataset.prevPercentage = carouselRef.current.dataset.percentage
    }
  });

  return (
    <body id='body'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div id='cursor-default'/>
      <div id='overflow'>
        <div class='parallax'>  
          <div class='header'>
            <a id='icon'>GABRIEL™</a>
            <ul id='desc'>
                <li><a>NO PRESERVATIVES</a></li>
                <li><a>ALL NATURAL FLAVOUR</a></li>
            </ul>
          </div>
          <div id='accent'/>
          <img src={oranges} alt='An image of oranges' id='oranges'/>
          <div class='intro'>
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

        <div class='aboutMe'>
          <header id='title'>About Me</header>
          <div>
            <img alt='A photo of me' src={pfp} id='pfp'></img>
            <div>
              <span id='para'>
                Hi! I’m Gabriel Ng, an aspiring web developer. I specialise in html, js, css, which makes me a skilful front-end developer, capable of making a portfolio website in 1 week. Not bad if I do say myself, but I always seek to improve, sharpen my skills and work on my craft.<br/><br/>When I’m not making award-winning websites, I play chess, study, or play video games.<br/>
                <br/>
                Contact me:<br/>
                HANDPHONE: 87860998<br/>
                EMAIL: gabrielngyes@gmail.com<br/>
                ADDRESS: [CENSORED]<br/>
              </span>
            </div>
          </div>
        </div>


        <div class='laws'>
          <div id='sub-title'>Gabriel's 3 laws of motion:</div>
          <div id='cardDisplay'>
            <card src={orange} id='card'>
              <a>
                <span id='title'>LAW 1</span>
                <span>No external force can stop me when I'm in motion!</span>
              </a>
            </card>
            <card src={orange} id='card'>
              <a>
                <span id='title'>LAW 2</span>
                <span>Moving masses at an accelerating speed to be a force of good.</span>
              </a>
            </card>
            <card src={orange} id='card'>
              <a>
                <span id='title'>LAW 3</span>
                <span>When life gives you oranges, give them back!</span>
              </a>
            </card>
          </div>
        </div>
        
        <div class='swiper'>
          <div id='title'>My Achievements</div>
          <div ref={carouselRef} id='swiperWrapper' data-mouse-down-at="0" data-prev-percentage="0">

            <p>click & drag</p>
            <i class="fa fa-arrow-left" id='arrow'></i>

            <card class='swiper-slide' draggable='false'>
              <img ref={imageRefs} src={img1} class='card-image' draggable='false'/>
              <div>
                <span id='title'>SYF 2023</span>
                <p>I played Ralph in SST's SYF 2023 play, Lord of the Flies by William Golding.<br/>Our school won an accomplishment</p>
              </div>
            </card>
            
            <card class='swiper-slide' draggable='false'>
              <img ref={imageRefs} src={img2} class='card-image' draggable='false'/>
              <div>
                <span id='title'>#Tellstory by NLB</span>
                <p>I played some guy in the last play for SST's #Tellstory submission, hosted by NLB</p>
              </div>
            </card>
            
            <card class='swiper-slide' draggable='false'>
              <img ref={imageRefs} src='https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' class='card-image' draggable='false'/>
              <div>
                <span id='title'>Edusave award</span>
                <p>I won an Edusave award for my stellar academic achievements</p>
              </div>
            </card>
            
            <card class='swiper-slide' draggable='false'>
              <img ref={imageRefs} src={img3} class='card-image' draggable='false'/>
              <div>
                <span id='title'>Perse Coding Competition</span>
                <p>Hosted by SST, I won a participation award in Perse Coding Competition.</p>
              </div>
            </card>
            
            <card class='swiper-slide' draggable='false'>
              <img ref={imageRefs} src={img1} class='card-image' draggable='false'/>
              <div>
                <span id='title'>SYF 2023</span>
                <p>I played Ralph in SST's SYF 2023 play, Lord of the Flies by William Golding.<br/>Our school won an accomplishment</p>
              </div>
            </card>
            
            <card class='swiper-slide' draggable='false'>
              <img ref={imageRefs} src={img1} class='card-image' draggable='false'/>
              <div>
                <span id='title'>SYF 2023</span>
                <p>I played Ralph in SST's SYF 2023 play, Lord of the Flies by William Golding.<br/>Our school won an accomplishment</p>
              </div>
            </card>
            
            <card class='swiper-slide' draggable='false'>
              <img ref={imageRefs} src={img1} class='card-image' draggable='false'/>
              <div>
                <span id='title'>SYF 2023</span>
                <p>I played Ralph in SST's SYF 2023 play, Lord of the Flies by William Golding.<br/>Our school won an accomplishment</p>
              </div>
            </card>
            
            <i class="fa fa-arrow-right"></i>

          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </body>
  )
}
export default App
