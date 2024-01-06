import React from "react";
function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={"https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"} alt="emoji" className="work-emoji" />
              <img src={"https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"} alt="mee" className="img-side__main-img" />
              <span>
                <img src={"https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Full Stack Developer <br /> based in Maharashtra, India
                📍
              </h4>
              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
