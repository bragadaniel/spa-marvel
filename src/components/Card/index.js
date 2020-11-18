import "./styles.css";

function Card({ src, titleImage, name, description, events }) {
  return (
    <div className="containerCard">
      <div className="boxAvatar size1of4">
        <img src={src} alt={titleImage} width="120" height="120" />
        <p className="nameCharacter">{name}</p>
      </div>
      <div className="size6of12">
        <p>{description}</p>
      </div>
      <div className="size1of4">
        <p>{events}</p>
      </div>
    </div>
  );
}

export default Card;
