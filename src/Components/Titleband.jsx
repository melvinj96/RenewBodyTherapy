import '../assets/css/TitleBand.css';

function TitleBand({ title, subtitle }) {
  return (
    <div className="title-band">
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}

export default TitleBand;