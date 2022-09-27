import PageNav from "./components/PageNavigation";
import FixedSide from "./components/FixedSideBar";

import AOS from 'aos';
import React from 'react';

import 'aos/dist/aos.css';

import "./styles/index.scss";
import "./styles/FixedSide.scss";
import "./styles/App.scss"
import "./styles/Animations.scss"
import "./styles/PageNavigation.scss"

AOS.init();

const App = () => {
  const ScrollView = () => {
      // @ts-ignore
      document.getElementById('abt').scrollIntoView({behavior: "smooth"});
  }

  return (
      <>
      <main>
        <div className="main-background" id="home">
            <PageNav />

            <article>
                <section className="home-container animate-push">
                    <p className="nat-welcome animate-push delay-fast">Hi, I'm Natalie.</p>
                    <h1 className="header-text animate-bar delay-fast">I am a web developer</h1>
                    <p className="intro-text animate-bar delay-medium">
                        I love retro.<br/>
                        I am a beginner web developer and an aspiring C# engineer.<br/>
                        I work on discord bots.
                    </p>

                    <button type="button" onClick={ScrollView} className="btn btn-shadows df animate-bar delay-slow">
                        More about me
                        <img alt="arrow down" className="img-abt-btn" src="/img/caret-down-fill.svg"/>
                    </button>
                </section>
            </article>
        </div>

        <article id="abt">
            <div data-aos="fade-up">
                <section className="about-section center">
                    <h2 className="header-text move-down-top">About</h2>
                    <p className="name-text">
                        I am a 16 year old girl from Romania.<br/><br/>
                        I aspire to become a front end web developer and react is my favourite JS library.<br/>
                        I like to code and play video games, mainly speed run and my favourite game is Celeste.<br/>
                        I do light pixel art and I like simple color schemes.<br/><br/>
                        I try to make my friends happy, and I usually stay quiet around everyone.<br/>
                        If you want to talk to me feel free to message but it'll take a while to be responded to, unless it's business related.<br/>
                        I want to try new things so I would love to try to work in a team one day!
                    </p>

                    <img src="/img/code-snippet-a.png" className="code-snippet" alt="CodeSnippet" />
                </section>
            </div>
           <div data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="500">
               <section className="work-section center" id="work">
                   <h3 className="header-text move-down">Work</h3>
                   <p className="name-text">
                       I mainly work as a front-end web developer.<br/>
                       I also work with TypeScript but I am at the beginning.<br/>
                       I like making UI, working with CSS/SASS animations and react.
                   </p>
                   <div className="center">
                       <span data-aos="fade-right" data-aos-delay="200">
                           <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
                           <span data-aos="fade-right" data-aos-delay="300">
                               <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
                               <span data-aos="fade-right" data-aos-delay="400">
                                   <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40" width="52" alt="sass logo"  />
                                   <span data-aos="fade-right" data-aos-delay="500">
                                       <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo"  />
                                       <span data-aos="fade-right" data-aos-delay="600">
                                           <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="typescript logo"  />
                                           <span data-aos="fade-right" data-aos-delay="700">
                                               <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
                                           </span>
                                       </span>
                                   </span>
                               </span>
                           </span>
                       </span>
                   </div>
                   <p className="name-text">
                       I also work with other languages. <br/>
                       Python is my favourite language for discord bots and C++ is the language I use for school.<br/>
                       C# is my fallback language, it's good at everything.
                   </p>
                   <div className="center">
                       <span data-aos="fade-right" data-aos-delay="200">
                           <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height="40" width="52" alt="csharp logo"  />
                           <span data-aos="fade-right" data-aos-delay="300">
                               <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="40" width="52" alt="cplusplus logo"  />
                               <span data-aos="fade-right" data-aos-delay="400">
                                   <img className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" width="52" alt="python logo"  />
                               </span>
                           </span>
                       </span>

                   </div>
                   <p className="name-text">
                       My tools of choice are pretty basic, but they do their job very well.<br/>
                       I got all jetbrains IDE for free because I have an ISIC card, that was very handy.<br/>
                       I use Rider for c# backend and WebStorm for react/express apps.
                   </p>
                   <div className="center">
                       <img data-aos="fade-right" data-aos-delay="200" className="raise" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" height="40" width="52" alt="pycharm logo"  />
                       <img className="raise" data-aos="fade-right" data-aos-delay="300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" height="40" width="52" alt="jetbrains logo"  />
                       <img className="raise" data-aos="fade-right" data-aos-delay="400" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" width="52" alt="vscode logo"  />
                   </div>
               </section>
           </div>
           <div data-aos="fade-up"
               data-aos-offset="500"
               data-aos-duration="500">
               <section className="contact-section center" id="cta">
                   <h4 className="header-text move-down">Contact & Socials</h4>
                   <p className="name-text">
                       You can find me on many social medias, I'll link most of them below.<br/>
                       I don't use twitter much but you can message me there.<br/>
                       Discord is my main social media, it's where I talk with my friends, please do not message me with business in mind there unless I specify.<br/>
                       You can check out most of my projects on my github page, where you can also look at all of my code.<br/>
                       For business related information, please email.<br/>
                   </p>
                       <div className="flex" data-aos="fade-up" data-aos-delay="400">
                           <a href="https://twitter.com/omoNattie" target="_blank" rel="noreferrer">
                               <button type="button" className="btn-rounder move-left">
                                   <img className="btn-logo" src="/img/twitter.svg" alt="twitter"/>
                               </button>
                           </a>
                           <a href="https://discord.com/users/824606337719074817" target="_blank" rel="noreferrer">
                               <button type="button" className="blue-btn move-left">
                                   <img className="btn-logo" src="/img/discord.svg" alt="twitter"/>
                               </button>
                           </a>
                           <a href="https://github.com/omoNattie" target="_blank" rel="noreferrer">
                               <button type="button" className="btn-rounder move-left">
                                   <img className="btn-logo" src="/img/github.svg" alt="twitter"/>
                               </button>
                           </a><br/>
                           <a href="mailto:omoNattie@gmail.com" target="_blank" rel="noreferrer">
                               <button type="button" className="btn-rounder move-down-btn">
                                   <img className="btn-logo" src="/img/mailbox.svg" alt="twitter"/>
                               </button>
                           </a>
                       </div>
               </section>
           </div>
        </article>

        <div className="dd"></div>

        <FixedSide />
        <a rel="noreferrer" href="https://creativecommons.org/publicdomain/zero/1.0/" className="footer-text" id="licence" target="_blank" data-aos="fade-up" data-aos-delay="400">
            Under the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
        </a>
      </main>
    </>
  );
}

export default App;
