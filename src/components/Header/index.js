import "./styles.css";

function Header({ dataMenu: { name, src, titleImage } }) {
  return (
    <header className="menu">
      <div className="size6of12"></div>
      <div className="userInfo size6of12">
        <p>{name}</p>
        <img src={src} alt={titleImage} width="48" height="48" />
      </div>
    </header>
  );
}

export default Header;
