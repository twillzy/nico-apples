import React from 'react';

export default () => (
  <div className="white-bg padding-top-sm">
    <div className="wide-container margin-bottom-sm">
      <h1 className="margin-top-zero">About Me</h1>
      <div className="about-me row">
        <div className="about-me-text lg-span-column-6">
          <p className="margin-top-zero line-height-md">I’m a User Experience Designer and creative problem solver based in Sydney. After working as a marketing professional for 7 years, I recently transitioned to the world of UX design to satisfy my thirst for creativity and combine it with existing skillsets. I spent many years trying to understand the users’ needs, now I design solutions for them. I’m passionate about creating digital experiences that get to the core of the problem and put the users’ needs at the centre of the design process.</p>
          <p className="line-height-md">I am also the proud owner of <span className="nico-red"><a className="nostyle-link nostyle-visited" href="https://coolasafox.com/" target="_blank" rel="noopener noreferrer">Cool As A Fox</a></span>, an e-commerce selling colourful, gender-neutral socks. I started the business as an outlet to express my creative side and in just two years it has grown from a small side project to a successful e-commerce with over 4000 happy customers in Australia.</p>
          <p className="line-height-md">I also happen to love pizza (without pineapple) and cats. Check out my case studies and my <span className="nico-red"><a className="nostyle-link nostyle-visited" href="https://www.linkedin.com/in/nicomele/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span> if you want to know more about my work. I’d love to tell you more about what gets me excited, <span className="nico-red"><a className="nostyle-link nostyle-visited" href="mailto:nicomele1@gmail.com">get in touch</a></span> for any question.</p>
          <p className="line-height-md">Let’s grab a coffee.</p>
        </div>
        <div className="about-me-img-container lg-span-column-6">
          <img className="width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/nico-v2.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h4 className="section-header">MY APPROACH TO UX DESIGN</h4>
        <img className="width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/approach+to+ux.png" alt="" />
        <h4 className="margin-top-md section-header">A FEW CURIOSITIES</h4>
        <ul className="margin-bottom-sm line-height-md">
          <li>I am the proud parent of a beautiful cat. Say hi to <span className="nico-red"><a className="nostyle-link nostyle-visited" href="https://www.instagram.com/pristhecat/" target="_blank" rel="noopener noreferrer">Pris</a></span>!</li>
          <li>I am an avid traveller, I have been to 45+ countries and I try to visit at least one new one every year. You can see some of my favourite travel photos on <span className="nico-red"><a className="nostyle-link nostyle-visited" href="https://www.instagram.com/nicoapples/" target="_blank" rel="noopener noreferrer">Instagram</a></span>.</li>
          <li>My favourite movie is Mulholland Drive (massive fan of David Lynch). Every time I watch it I come up with a different theory about the ending.</li>
          <li>I love eating apples <span role="img" aria-label="apple">🍎 </span>, but my nickname @nicoapples is derived from my last name. It means apples in Italian.</li>
          <li>My favourite day in the Sydney party calendar is Mardi Gras and I have been volunteering/marching since 2012.</li>
        </ul>
      </div>
    </div>
  </div>
);
