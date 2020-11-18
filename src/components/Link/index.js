import "./styles.css";

function Link({ id, link, children, onClick }) {
  return (
    <a id={id} href={link ? link : "#"} onClick={onClick} className="link">
      {children}
    </a>
  );
}

export default Link;
