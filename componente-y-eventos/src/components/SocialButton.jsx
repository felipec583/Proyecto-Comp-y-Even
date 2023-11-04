import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

const SocialButton = ({ facebook, github, linkedin }) => {
  return (
    <>
      <a href="https://www.facebook.com">
        {facebook && <BsFacebook className="icono" color="black" size={60} />}
      </a>
      <a href="https://github.com">
        {github && <BsGithub className="icono" color="black" size={60} />}
      </a>
      <a href="https://www.linkedin.com">
        {linkedin && (
          <BiLogoLinkedin className="icono" color="black" size={60} />
        )}
      </a>
    </>
  );
};

export default SocialButton;
