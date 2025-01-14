import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="/">
              <span>
                <FontAwesomeIcon icon={faCode}> </FontAwesomeIcon> Lex Liu
              </span>
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li>
          <a href="#contact">Contact</a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/xuliulx" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              aria-hidden="true"
            ></FontAwesomeIcon>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/lexliu19" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              aria-hidden="true"
            ></FontAwesomeIcon>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="button">
            Connect With Me
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
