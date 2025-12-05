import { useEffect } from 'react';
import Description from './Description';
import ServicePoints from './ServicePoints';
import TitleBand from '../Titleband';
import '../../assets/css/About.css';
import Awards from './Awards';

function About() {

  useEffect(() => {
    document.title = 'Sports Massage Therapist in Dudley | About Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our NHS-qualified therapist & personalised care approach | Serving Dudley & nearby areas | Book your appointment today →');
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