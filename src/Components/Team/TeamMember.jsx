function TeamMember({ name, title, image, description }) {
    return (
      <div className="team-member">
        <div className="member-image">
          <img src={image} alt={name} />
        </div>
        <div className="member-info">
          <h2>{name}</h2>
          <h3>{title}</h3>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }
  
  export default TeamMember;