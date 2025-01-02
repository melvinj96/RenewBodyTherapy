import Description from './Description';
import ServicePoints from './ServicePoints';
import TitleBand from '../Titleband';
import '../../assets/css/About.css';

function About() {
  return (
    <div>
      <TitleBand title="About" />
      <div className="about-container">
        <Description />
        <ServicePoints />
      </div>
    </div>
  );
}

export default About;