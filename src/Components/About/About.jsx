import Description from './Description';
import ServicePoints from './ServicePoints';
import TitleBand from '../Titleband';
import '../../assets/css/About.css';
import Awards from './Awards';

function About() {
  return (
    <div>
      <TitleBand title="About" />
      <div className="about-container">
        <Description />
        <Awards />
        <ServicePoints />
      </div>
    </div>
  );
}

export default About;