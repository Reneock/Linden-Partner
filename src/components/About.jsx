import React from "react";
import {Container} from 'react-bootstrap';
import Typed from "typed.js";
import {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";

function About() {
  const el = useRef(null);

  useEffect (() => {
    const typed = new Typed(el.current, {
      strings: ['Julius', 'an Engineer', 'a Consultant'],
      startDelay:200,
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  let navigate = useNavigate();

 

  return (
    <Container fluid className="aboutbody">
      <div className="container">
        <div className="text">
          <h1>Hi, I am <span ref={el}></span></h1>
          <p>My vision is to ensure there is positive impact through partnerships. <br /> I look forward to assist you with the needed guidance and ensure your <br/> ideas  and imaginations become a reality.</p>
          <div className="btn">
            <button onClick={()=>{navigate("/contact")}}>Contact</button>
            {/*<button>Download CV</button>*/}
          </div>
        </div>

        <div className="profile">
          <img src="Julius.JPG" alt="Julius" />
        </div>

      </div>
    </Container>
  );
}

export default About;