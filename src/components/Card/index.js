import "./styles.css";

function Card({ ...props }) {
  const { thumbnail: { extension, path }, name, description } = props
  return (
    <div className="containerCard">
      <div className="boxAvatar size1of4">
        <img src={`${path}.${extension}`} alt={name} width="120" height="120" />
        <p className="nameCharacter">{name}</p>
      </div>
      <div className="size6of12">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
