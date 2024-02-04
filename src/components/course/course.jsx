/* eslint-disable react/prop-types */

export default function Course({title, description, iconFile}) {
  const iconUrl = `${iconFile}`;

  return (
    <div className="course">
      <img className="course__icon" src={iconUrl} alt={title + " icon"}/>
      <h4 className="course__title">{title}</h4>
      <p className="course__description">{description}</p>
      <a className="course__link" href="#">
        Get Started
      </a>
    </div>
  );
}
