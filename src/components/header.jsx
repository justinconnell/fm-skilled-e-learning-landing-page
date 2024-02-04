// noinspection JSValidateTypes

import logoDark from '../assets/images/logo-dark.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoDark} alt="go to home page" />
      <a href="#" className="header__button">
        Get Started
      </a>
    </header>
  );
}
