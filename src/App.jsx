// noinspection JSValidateTypes

import "./scss/style.scss";
import Courses from './components/course/courses.jsx';
import Header from './components/header.jsx';
import HeroSection from './components/heroSection.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <HeroSection />
        <article className="courses">
          <Courses />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
