import { useEffect } from 'react';
import Description from './Description';
import ServicePoints from './ServicePoints';
import TitleBand from '../Titleband';
import '../../assets/css/About.css';
import Awards from './Awards';

function About() {

  useEffect(() => {
    document.title = 'Qualified Massage Therapist Dudley | About Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Find out more about our origins, experience &amp; future goals | Renowned massage therapist in Dudley offering a range of services | Learn more →');
  }
  }, []);

  return (
    <div>
      <TitleBand title="About Renew Body Therapy - Dedicated Massage Therapist in Dudley" />
      <div className="about-container">
        <Description />
        <Awards />
        <ServicePoints />
      </div>
    </div>
  );
}

export default About;