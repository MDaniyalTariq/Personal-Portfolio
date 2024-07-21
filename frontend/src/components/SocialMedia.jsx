import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/daniyal-tariq-584265295/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/MDaniyalTariq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://instagram.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
