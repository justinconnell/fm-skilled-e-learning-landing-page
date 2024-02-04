// noinspection JSValidateTypes

import logoLight from '../assets/images/logo-light.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoLight} alt="go to home page" />
      <a href="#" className="footer__button">
        Get Started
      </a>
    </footer>
  );
}
