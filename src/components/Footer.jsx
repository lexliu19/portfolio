import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="contact">
      <h2>Connect with me 👏</h2>
      <p>
        You can connect with me through{' '}
        <a href="https://www.linkedin.com/in/xuliulx/">LinkedIn</a> and{' '}
        <a href="https://github.com/lexliu19">Github</a>, or feel free to drop
        me an email!
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/xuliulx/" target="_blank">
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
          <a href="mailto:xuliu0925@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              aria-hidden="true"
            ></FontAwesomeIcon>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
