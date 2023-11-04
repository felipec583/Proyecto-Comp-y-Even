import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';


const SocialButton = ({ facebook, github, linkedin, }) => {
  return (
    <>
      <a  href="https://www.facebook.com">{facebook &&  (<BsFacebook icon={BsFacebook}  className='icono' color='black' size={60}/>)}</a>
      <a  href="https://github.com">{github &&  (<BsGithub icon={BsGithub} className='icono' color='black' size={60}/>)}</a>
      <a  href="https://www.linkedin.com">{linkedin &&  (<BiLogoLinkedin icon={BiLogoLinkedin} className='icono' color='black' size={60}/>)}</a>
    </>
)
};

export default SocialButton;
