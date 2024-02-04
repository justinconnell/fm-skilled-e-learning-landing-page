import Course from './course.jsx';
import courseList from '../../data/courses.json';

export default function Courses() {
  const listItems = courseList.courses.map((course) => (
    <li className="course-list__item" key={course.id}>
      <Course
        title={course.title}
        description={course.description}
        iconFile={course.icon}
      />
    </li>
  ));
  return (
    <ul className="course-list">
      <li className="course-list__header">
        <h3 className="course-list__title">
          Check out our most popular courses!
        </h3>
      </li>
      {listItems.splice(0,5)}
    </ul>
  );
}
